import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import FavoritesList from "./FavoritesList";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";

const MyFavorites = () => {
  return (
    <ContainerUI>
      <TitleUI title="Favorites" />
      <Box padding="0.5rem 0">
        <FavoritesList />
      </Box>
      <Box textAlign="center" marginTop={2}>
        <MoveNextButton label="ADDMORE" />
      </Box>
    </ContainerUI>
  );
};

export default MyFavorites;
