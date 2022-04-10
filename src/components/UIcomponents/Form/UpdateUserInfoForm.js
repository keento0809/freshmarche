import { Fragment } from "react";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";

const UpdateUserInfoForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting!");
    props.onClick();
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
          variant="standard"
          margin="normal"
          required
          fullWidth
          id={`${props.value}`}
          name={`${props.value}`}
          placeholder={props.val}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SaveIcon onClick={handleSubmit} />
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
