import ContainerUI from "../components/UIcomponents/Container/ContainerUI";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <ContainerUI>
      <Typography variant="body1" component="p" color="#fff" textAlign="center">
        Page Not Found.
      </Typography>
    </ContainerUI>
  );
};

export default NotFound;
