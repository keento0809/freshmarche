import ProductPaper from "../UIcomponents/Products/ProductPaper";
import ViewDetailButton from "../UIcomponents/Buttons/ViewDetailButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { autocompleteClasses } from "@mui/material";

const ImageComponent = styled("span")({
  width: "100px",
  height: "auto",
});

const Product = (props) => {
  return (
    <ProductPaper>
      <li key={props.index}>
        <ImageComponent>
          <img src="" alt="" />
        </ImageComponent>
        <Typography variant="subtitle2" component="p" color="primary">
          {props.name}
        </Typography>
        <Typography variant="body1" component="span" color="primary">
          ${props.price}
        </Typography>
        {/* <img src={props.imageUrl} alt="" /> */}
        <ViewDetailButton text="View" />
      </li>
    </ProductPaper>
  );
};

export default Product;
