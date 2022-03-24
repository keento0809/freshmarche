import FavoriteIcon from "@mui/icons-material/Favorite";
import AddToCartButton from "../UIcomponents/Buttons/AddToCartButton";
import MainBoxUI from "../UIcomponents/Box/MainBox";
import Box from "@mui/material/Box";
import ChangeAmountButton from "../UIcomponents/Buttons/ChangeAmountButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";

const Info = (props) => {
  return (
    <MainBoxUI>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body1" component="span" color="secondary">
          {props.name}
        </Typography>
        <FavoriteIcon sx={{ color: "violet" }} />
      </Box>
      <Box>
        <ChangeAmountButton />
        <Typography variant="h2" component="h3" color="white">
          ${props.price}
        </Typography>
        <Typography variant="span" component="p" color="secondary">
          Description
        </Typography>
        <KeyboardArrowDownIcon display="inline-block" color="secondary" />
      </Box>
      <Box margin="2rem 0">
        <AddToCartButton />
      </Box>
    </MainBoxUI>
  );
};

export default Info;
