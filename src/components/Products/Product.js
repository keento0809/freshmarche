import ProductPaper from "../UIcomponents/Products/ProductPaper";
import ViewDetailButton from "../UIcomponents/Buttons/ViewDetailButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { autocompleteClasses } from "@mui/material";

const ImageComponent = styled("img")({
  width: "100px",
  height: "100%",
  minHeight: "100px",
  padding: "0.5rem",
});

const Product = (props) => {
  return (
    <ProductPaper sx={{ display: "inline-block" }}>
      <li key={props.index}>
        <ImageComponent src={props.imageUrl} alt="" />
        <Typography variant="subtitle2" component="p" color="text.primary">
          {props.name}
        </Typography>
        <Typography variant="body1" component="span" color="text.primary">
          ${props.price}
        </Typography>
        {/* <img src={props.imageUrl} alt="" /> */}
        <ViewDetailButton text="Detail" />
      </li>
    </ProductPaper>
  );
};

export default Product;
