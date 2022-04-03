import * as React from "react";
import { useState, useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { InputAdornment } from "@mui/material";

import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // declare useContext
  const authCtx = useContext(AuthContext);

  // submitHandler
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");
    if (props.isSignup) {
      const enteredFullName = data.get("fullName");
      const enteredPasswordConfirmation = data.get("passwordConfirmation");

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

      url = props.isSignup
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI";

      try {
        const response = await fetch(
          // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI",
          url,
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          console.log(response);
          throw new Error("Authorization failed..!!");
        }

        const data = await response.json();
        console.log("Fetch succeed!", data);

        // execute login
        authCtx.login(data.idToken);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
      setIsLoading(false);
    };
    sendRequest();

    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    // <ThemeProvider theme={theme}>
    <ContainerUI>
      {/* <Container component="main" maxWidth="xs"> */}
      <Box paddingY={4}>
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
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ paddingY: 14 }}
        >
          {props.isSignup && (
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
          {props.isSignup && (
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
          {!props.isSignup && (
            <Box textAlign="center" sx={{ mt: 2 }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
          )}
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
            }}
            bgColor="red"
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
              // href={props.isSignup ? "/authentication" : "/signup"}
              variant="body2"
              component={RouterLink}
              to={props.isSignup ? "/authentication" : "/signup"}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              color="red"
            >
              {props.isSignup ? "SIGN IN" : "CREATE ACCOUNT"}
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
