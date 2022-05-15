import * as React from "react";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth-context";
import NotifyContext from "../../contexts/notify-context";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { InputAdornment } from "@mui/material";

import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ConstructionOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const AuthForm = (props) => {
  // declare useState
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(isSignUp);

  // declare useContext
  const authCtx = useContext(AuthContext);
  const notifyCtx = useContext(NotifyContext);

  // declare history
  const history = useHistory();

  const theme = useTheme();

  // create userId for new user
  function generateUserId(length) {
    var newId = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      newId += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return newId;
  }

  const userIdLength = 16;
  // submitHandler
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataMui = new FormData(event.currentTarget);

    const enteredEmail = dataMui.get("email");
    const enteredPassword = dataMui.get("password");

    if (isSignUp) {
      const enteredFullName = dataMui.get("fullName");
      const enteredPasswordConfirmation = dataMui.get("passwordConfirmation");

      // add validation
      if (enteredFullName === "") return;
      if (enteredPassword !== enteredPasswordConfirmation) {
        return;
      }
    }

    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);

      let url;

      // AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI

      url = isSignUp
        ? // original
          // ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI`
        : // original
          // : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`;
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI`;

      let enteredFullName;

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          if (isSignUp) enteredFullName = dataMui.get("fullName");
          else enteredFullName = "";

          const setId = generateUserId(userIdLength);
          const userInfo = {
            id: setId,
            username: enteredFullName,
            address: "",
            email: enteredEmail,
            password: "*********",
          };

          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );

          authCtx.login(data.idToken, expirationTime.toISOString());

          if (isSignUp && data.idToken) {
            notifyCtx.notifyNow("Sing up succeeded !!");
            history.replace("/");
          }
          if (!isSignUp) {
            notifyCtx.notifyNow("Login succeeded !!");
            history.replace("/");
          }
        })
        .catch((error) => setError(error.message));
      setIsLoading(false);
    };
    sendRequest();
  };

  // test
  const handleSignInAsGuestUser = (e) => {
    e.preventDefault();
    // process.env doesn't work
    // original code
    // const guestUserEmail = process.env.GUEST_USER_EMAIL;
    const guestUserEmail = "guestUser@test.com";
    // original code
    // const guestUserPassword = process.env.GUEST_USER_PASSWORD;
    const guestUserPassword = "IPPd5QschJNRt4Li";

    setIsLoading(true);
    setError(null);

    fetch(
      // original
      // `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI`,
      {
        method: "POST",
        body: JSON.stringify({
          email: guestUserEmail,
          password: guestUserPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Guest login failed.");
        return res.json();
      })
      .then((data) => {
        const setId = generateUserId(userIdLength);
        const userInfo = {
          id: setId,
          username: "Guest User",
          address: "",
          email: guestUserEmail,
          password: "*********",
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime);

        notifyCtx.notifyNow("Login succeeded !!");
        history.replace("/");
      })
      .catch((error) => setError(error.message));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsSignUp(props.isSignUp);
  }, []);

  return (
    <ContainerUI isProductDetail={true}>
      <Box sx={{ py: 4, [theme.breakpoints.up(1023)]: { py: 1 } }}>
        <TitleUI title={props.title} />
      </Box>
      {/* <CssBaseline /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="トップ"
      >
        <Box
          className="セカンド"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            paddingY: !isSignUp ? 0 : 2,
            [theme.breakpoints.up("sm")]: { width: "85%", mx: "auto", pt: 6 },
            [theme.breakpoints.up(1023)]: { width: "70%", mx: "auto" },
            [theme.breakpoints.up(1300)]: { width: "50%", mx: "auto" },
          }}
        >
          {isSignUp && (
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                borderRadius: "50px",
                backgroundColor: "background.grey",
                padding: "0.9rem 1.8rem",
                mt: 1.5,
              }}
            />
          )}
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              borderRadius: "50px",
              backgroundColor: "background.grey",
              padding: "0.9rem 1.8rem",
              mt: 1.5,
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              borderRadius: "50px",
              backgroundColor: "background.grey",
              padding: "0.9rem 1.8rem",
              mt: 1.5,
            }}
          />
          {isSignUp && (
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="passwordConfirmation"
              placeholder="Repeat password"
              type="password"
              id="passwordConfirmation"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                borderRadius: "50px",
                backgroundColor: "background.grey",
                padding: "0.9rem 1.8rem",
                mt: 1.5,
              }}
            />
          )}
          {!isSignUp && (
            <Box textAlign="center" sx={{ mt: 2 }}>
              {/* original code */}
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: "primary.main",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "1.2rem",
                }}
                onClick={handleSignInAsGuestUser}
              >
                Login as Guest user
              </Typography>
            </Box>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<ArrowForwardIosIcon />}
            // mt={isSignUp ? 20 : "40px"}
            sx={{
              // original code
              // mt: 20,
              mt: isSignUp ? 8 : 20,
              mb: 4,
              borderRadius: "50px",
              padding: "1rem 2rem",
              transition: "all 0.2s ease",
              "&.MuiButtonBase-root:hover": {
                transform: "scale(1.02)",
              },
              [theme.breakpoints.up(1023)]: { mt: 10 },
            }}
          >
            {props.btnLabel}
            {/* Sign In */}
          </Button>
          <Box textAlign="center">
            <Typography
              variant="body2"
              component={RouterLink}
              to={isSignUp ? "/authentication" : "/signup"}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              {isSignUp ? "SIGN IN" : "CREATE ACCOUNT"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default AuthForm;
