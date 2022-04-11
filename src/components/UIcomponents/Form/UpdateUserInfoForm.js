import { Fragment, useRef, useContext, useState } from "react";
import AuthContext from "../../../contexts/auth-context";
import NotifyContext from "../../../contexts/notify-context";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";

const UpdateUserInfoForm = (props) => {
  const updatedValueInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // declare context
  const authCtx = useContext(AuthContext);
  const notifyCtx = useContext(NotifyContext);

  const postNewRequest = () => {
    setIsLoading(true);
    setError(null);

    const updatedValue = updatedValueInputRef.current.value;
    let url;
    let bodyPayload;
    if (props.type === "email") {
      console.log("Email is gonna be updated.");
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI";
      bodyPayload = {
        idToken: authCtx.token,
        email: updatedValue,
        returnSecureToken: false,
      };
    }
    if (props.type === "password") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDlQG4PcAv2n1MoE_c1CVcK3tYRb-Z7VUI";
      bodyPayload = {
        idToken: authCtx.token,
        password: updatedValue,
        returnSecureToken: false,
      };
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyPayload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Post request failed.");
        console.log("update successful");
      })
      .catch((error) => {
        console.log("update failed");
        setError(error.message);
      });
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedValue = updatedValueInputRef.current.value;
    console.log(props.type);

    // add validation
    if (updatedValue.length === 0) {
      alert("Invalid ! It must not be empty.");
      return;
    }

    postNewRequest();
    props.onClick();

    // show up notification
    notifyCtx.notifyNow(`${props.label} is successfully updated !`);
  };

  return (
    <Fragment>
      <Typography
        variant="h5"
        component="h5"
        color="secondary"
        sx={{ fontWeight: "bold", textAlign: "center", pt: 1.5 }}
      >
        {`Edit ${props.label}`}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          type={props.type}
          // use InputRef in mui, not ref
          inputRef={updatedValueInputRef}
          variant="standard"
          margin="normal"
          required
          fullWidth
          id={`${props.value}`}
          name={`${props.value}`}
          placeholder={props.val}
          InputProps={{
            // add minLength into InputProps
            minLength: 5,
            endAdornment: (
              <InputAdornment position="start">
                <SaveIcon
                  onClick={handleSubmit}
                  sx={{ color: "text.primary", cursor: "pointer" }}
                />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          sx={{
            borderRadius: "8px",
            backgroundColor: "background.grey",
            paddingY: "0.9rem",
            paddingLeft: "2rem",
            paddingRight: "0.6rem",
            fontSize: "1.2rem",
            mt: 4,
            mb: 6,
          }}
        />
      </Box>
    </Fragment>
  );
};

export default UpdateUserInfoForm;
