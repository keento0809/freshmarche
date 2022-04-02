// import ContainerUI from "../UIcomponents/Container/ContainerUI";
// import TitleUI from "../UIcomponents/Title/TitleUI";
// import UserInfoInputUI from "../UIcomponents/Input/UserInfoInputUI";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// const AuthForm = () => {
//   const submitHandler = () => {
//     console.log("submitting!");
//   };

//   return (
//     <div>
//       <ContainerUI>
//         <form action="" onSubmit={submitHandler}>
//           <TitleUI title="Sign In" />
//           <Box paddingY={6} textAlign="center">
//             <UserInfoInputUI type="email" placeHolder="Email" />
//             <UserInfoInputUI type="password" placeHolder="Password" />
//           </Box>
//         </form>
//       </ContainerUI>
//     </div>
//   );
// };

// export default AuthForm;

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const AuthForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    // <ThemeProvider theme={theme}>
    <ContainerUI>
      {/* <Container component="main" maxWidth="xs"> */}
      <Box paddingY={4}>
        <TitleUI title="Sign In" />
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
              mt: 1,
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
              mt: 1,
            }}
            className="これがtext fieldかえ"
            //   sx={{ padding: "0.5rem 0.9rem" }}
          />
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
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
            Sign In
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
            <Link href="#" variant="body2">
              {"CREATE ACCOUNT"}
            </Link>
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
