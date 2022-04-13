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

// Copy right form. Do not delete just in case.
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

const AuthForm = (props) => {
  // declare useState
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  // submitHandler
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userIdLength = 16;

    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");

    if (isSignUp) {
      const enteredFullName = data.get("fullName");
      const enteredPasswordConfirmation = data.get("passwordConfirmation");

      // add validation
      if (enteredFullName === "") return;
      if (enteredPassword !== enteredPasswordConfirmation) {
        console.log("password invalid");
        return;
      }
    }

    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);

      let url;

      url = isSignUp
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI";

      console.log(url);

      let enteredFullName;

      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          const errorMessage = "Authorization failed. Please try it again.";
          alert(errorMessage);
          throw new Error(errorMessage);
        }

        const data = await response.json();

        if (isSignUp) enteredFullName = data.get("fullName");
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

        if (isSignUp) {
          notifyCtx.notifyNow("Sing up succeeded !!");
        }

        if (!isSignUp) {
          notifyCtx.notifyNow("Login succeeded !!");
        }
        // jump to home page
        history.replace("/");
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  };

  // test
  // const handleLoginAsGuestUser = (e) => {
  //   e.preventDefault();
  //   console.log("Guest login now");

  //   const sentGuestLoginRequest = async () => {
  //     setIsLoading(true);
  //     setError(null);
  //   };
  //   sentGuestLoginRequest();
  // };

  // test 2
  useEffect(() => {
    setIsSignUp(props.isSignUp);
  }, []);

  return (
    // <ThemeProvider theme={theme}>
    <ContainerUI>
      {/* <Container component="main" maxWidth="xs"> */}
      <Box sx={{ py: 4, [theme.breakpoints.up(1023)]: { py: 1 } }}>
        <TitleUI title={props.title} />
      </Box>
      {/* <CssBaseline /> */}
      <Box
        sx={{
          // marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="トップ"
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
        <Box
          className="セカンド"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            paddingY: !isSignUp ? 14 : 2,
            [theme.breakpoints.up("sm")]: { width: "85%", mx: "auto" },
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
              //   label="Email Address"
              name="fullName"
              placeholder="Full Name"
              //   autoComplete="email"
              //   autoFocus
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
              // ref={enteredFullName}
            />
          )}
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            //   label="Email Address"
            name="email"
            placeholder="Email"
            //   autoComplete="email"
            //   autoFocus
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
            // ref={enteredEmail}
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
            // autoComplete="current-password"
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
            // ref={enteredPassword}
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
              // autoComplete="current-password"
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
              // ref={enteredPasswordConfirmation}
            />
          )}
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          {!isSignUp && (
            <Box textAlign="center" sx={{ mt: 2 }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
          )}

          {/* test */}
          {/* <Box textAlign="center">
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onSubmit={handleLoginAsGuestUser}
              sx={{ fontWeight: "normal" }}
            >
              Login As Guest
            </Button>
          </Box> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<ArrowForwardIosIcon />}
            sx={{
              mt: 20,
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
          {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"CREATE ACCOUNT"}
                </Link>
              </Grid>
            </Grid> */}

          <Box textAlign="center">
            {/* original code. DO NOT Delete */}
            {/* <Link
              href={props.isSignup ? "/authentication" : "/signup"}
              variant="body2"
            >
              {props.isSignup ? "SIGN IN" : "CREATE ACCOUNT"}
            </Link> */}

            {/* test */}
            <Typography
              variant="body2"
              component={RouterLink}
              to={isSignUp ? "/authentication" : "/signup"}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              // color="red"
            >
              {isSignUp ? "SIGN IN" : "CREATE ACCOUNT"}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      {/* </Container> */}
    </ContainerUI>
    // </ThemeProvider>
  );
};

export default AuthForm;
