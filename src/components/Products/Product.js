import ProductPaper from "../UIcomponents/Products/ProductPaper";
import ViewDetailButton from "../UIcomponents/Buttons/ViewDetailButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { autocompleteClasses } from "@mui/material";

const ImageComponent = styled("img")({
  width: "100%",
  height: "100%",
  minHeight: "100px",
  padding: "0.5rem",
});

const Product = (props) => {
  return (
    <ProductPaper sx={{ display: "inline-block" }}>
      <li key={props.index}>
        <ImageComponent src={props.imageUrl} alt="" />
        <Typography
          variant="subtitle2"
          component="p"
          color="text.primary"
          sx={{ paddingLeft: "0.2rem" }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            textAlign: "right",
            paddingRight: "0.8rem",
            fontSize: "0.7rem",
          }}
        >
          ${props.price}
        </Typography>
        {/* <img src={props.imageUrl} alt="" /> */}
        <ViewDetailButton text="Detail" />
      </li>
    </ProductPaper>
  );
};

export default Product;
