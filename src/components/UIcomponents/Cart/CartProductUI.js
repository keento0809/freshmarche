import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeAmountButton from "../Buttons/ChangeAmountButton";
// import ChangeAmountButton from "../Buttons/changeAmountButton";

const CartProductUI = () => {
  const [isFavoriteItem, setIsFavoriteItem] = useState(false);

  useEffect(() => {
    setIsFavoriteItem(false);
  }, []);

  return (
    <Box bgcolor="white" borderRadius="12px" margin="1rem 0">
      <Box
        className="firstRow"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="0.5rem 1.2rem"
      >
        <Box>
          <Typography variant="h5" component="h5" color="text.primary">
            Product A
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="h5" component="h5" color="primary">
            1
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            paddingLeft="1rem"
          >
            $10.99
          </Typography>
        </Box>
      </Box>
      <Box
        className="secondRow"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0.5rem 1.2rem"
        bgcolor="background.third"
        borderRadius="12px"
      >
        {isFavoriteItem && (
          <Typography variant="body2" component="span">
            View Detail
          </Typography>
        )}
        {!isFavoriteItem && <ChangeAmountButton sx={{ width: "80%" }} />}
        <DeleteIcon color="text.primary" />
      </Box>
    </Box>
  );
};

export default CartProductUI;
