import MainBoxUI from "../UIcomponents/Box/MainBox";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const ImageComponent = styled("img")({
  width: "100%",
  height: "100%",
  minHeight: "200px",
  padding: "0.5rem",
  margin: "2rem 0",
});

const DetailHero = (props) => {
  return (
    <MainBoxUI margin="1rem 0">
      <Typography variant="h4" component="h4" color="secondary">
        Product A
      </Typography>
      <ImageComponent
        src="https://www.dole.com/-/media/project/dole/produce-images/fruit/bannanas_web.png?rev=b27a9f94db1744e9ae702a0ba20871d4&hash=AF03ECA16ACB32D92A74462BE212E716"
        alt="product"
      />
    </MainBoxUI>
  );
};

export default DetailHero;
