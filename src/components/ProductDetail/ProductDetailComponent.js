import { useEffect, useState } from "react";
import Info from "./Info";
import DetailHero from "./DetailHero";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import TitleUI from "../UIcomponents/Title/TitleUI";

const ProductDetailComponent = (props) => {
  const theme = useTheme();
  const [is1024up, setIs1024up] = useState(false);

  return (
    <ContainerUI isProductDetail={true}>
      <Box sx={{ pb: "62px", [theme.breakpoints.up("sm")]: { pb: "200px" } }}>
        {!is1024up && <TitleUI title={props.name} />}
        {is1024up && (
          <Box sx={{ pb: 8 }}>
            <TitleUI title={props.name} />
          </Box>
        )}
        <Box
          sx={{
            [theme.breakpoints.up(1023)]: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <DetailHero
            id={props.id}
            name={props.name}
            imageUrl={props.imageUrl}
            is1024up={is1024up}
            setIs1024up={setIs1024up}
          />
          <Info
            id={props.id}
            name={props.name}
            price={props.price}
            quantity={props.quantity}
            subTotalPrice={props.subTotalPrice}
            imageUrl={props.imageUrl}
          />
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default ProductDetailComponent;
