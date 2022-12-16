import React from "react";
import "./CartMessage.scss";
// import { correct } from "../../utils/images";
import CheckIcon from "@mui/icons-material/Check";

const CartMessage = () => {
  return (
    <div className="cart-message text-center">
      <div className="cart-message-icon">
        {/* <img src = {correct} alt = "" /> */}
        <CheckIcon style={{ fontSize: "50px", color: "green" }} />
      </div>
      <h6 className="text-white fs-14 fw-5">
        An item has been added to your shopping cart
      </h6>
    </div>
  );
};

export default CartMessage;
