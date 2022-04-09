import { Link as RouterLink, useParams } from "react-router-dom";
import ProductPaper from "../UIcomponents/Products/ProductPaper";
import ViewDetailButton from "../UIcomponents/Buttons/ViewDetailButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import dummyData from "../../data/dummyData.json";
import Box from "@mui/material/Box";

const ImageComponent = styled("img")({
  width: "100%",
  height: "100%",
  // minHeight: "100px",
  // maxHeight: "100px",
  padding: "0.5rem",
  objectFit: "cover",
});

const imageDivStyle = {
  width: "118px",
  height: "100px",
};

const Product = (props) => {
  const params = useParams();
  const product = dummyData.find((product) => product.id === params.productId);

  return (
    <ProductPaper sx={{ display: "inline-block" }}>
      <li key={props.index}>
        <Box sx={imageDivStyle}>
          <ImageComponent src={props.imageUrl} alt="objectfit" />
        </Box>
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
        <ViewDetailButton text="Detail" id={props.id} />
      </li>
    </ProductPaper>
  );
};

export default Product;
