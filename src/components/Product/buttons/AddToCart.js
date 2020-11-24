import React from "react";
import Quantity from "./Quantity";

export default function AddToCart({ handleSubmit, unavailible }) {
  return (
    <button
      onClick={handleSubmit}
      disabled={unavailible}
      className={"btn-add-to-cart"}
    >
      add to cart
    </button>
  );
}
