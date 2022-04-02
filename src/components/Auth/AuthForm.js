import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AuthForm = () => {
  const submitHandler = () => {
    console.log("submitting!");
  };

  return (
    <div>
      <ContainerUI>
        <form action="" onSubmit={submitHandler}>
          <TitleUI title="Sign In" />
          <Box paddingY={6} textAlign="center">
            <Typography variant="body1" component="p" color="primary">
              input will be here.
            </Typography>
          </Box>
        </form>
      </ContainerUI>
    </div>
  );
};

export default AuthForm;
