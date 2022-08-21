import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const TitleUI = (props) => {
  const theme = useTheme();

  return (
    <Box
      textAlign="center"
      sx={{
        paddingTop: "6rem",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color="secondary"
        sx={{
          fontSize: "1.5rem",
          paddingBottom: "0.5rem",
          [theme.breakpoints.up(1024)]: { fontSize: "1.7rem" },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default TitleUI;
