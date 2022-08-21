import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const TitleUI = (props) => {
  const theme = useTheme();

  return (
    <Box
      className="className,頼みまっせ"
      textAlign="center"
      sx={{
        padding: "1rem 0",
        [theme.breakpoints.up("sm")]: { padding: "1.5rem 0" },
        [theme.breakpoints.up(1023)]: { padding: "2.5rem 0" },
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color="secondary"
        sx={{
          fontSize: "1.7rem",
          [theme.breakpoints.up("sm")]: { fontSize: "2rem" },
          // [theme.breakpoints.up(900)]: { fontSize: "2.5rem" },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default TitleUI;
