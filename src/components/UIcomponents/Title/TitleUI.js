import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TitleUI = (props) => {
  return (
    <Box textAlign="center" padding="1rem 0">
      <Typography variant="h4" component="h4" color="secondary">
        {props.title}
      </Typography>
    </Box>
  );
};

export default TitleUI;
