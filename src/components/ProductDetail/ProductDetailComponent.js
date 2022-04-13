import Info from "./Info";
import DetailHero from "./DetailHero";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const ProductDetailComponent = (props) => {
  const theme = useTheme();

  return (
    <ContainerUI>
      {/* test box */}
      <Box
        paddingBottom="100px"
        // sx={{
        //   [theme.breakpoints.up(1023)]: {
        //     display: "flex",
        //     flexDirection: "row",
        //     alignItems: "center",
        //   },
        // }}
      >
        <DetailHero
          id={props.id}
          name={props.name}
          imageUrl={props.imageUrl}
          // sx={{
          //   [theme.breakpoints.up(1023)]: {
          //     flex: 1,
          //   },
          // }}
        />
        <Info
          id={props.id}
          name={props.name}
          price={props.price}
          quantity={props.quantity}
          subTotalPrice={props.subTotalPrice}
          imageUrl={props.imageUrl}
          // sx={{
          //   [theme.breakpoints.up(1023)]: {
          //     flexGrow: 2,
          //   },
          // }}
        />
      </Box>
    </ContainerUI>
  );
};

export default ProductDetailComponent;
