import React from "react";

export default function Quantity({ handleClick, quantity, stock }) {
  return (
    <div>
      <button disabled={quantity === stock} onClick={() => handleClick(1)}>
        +
      </button>
      <div>{quantity}</div>
      <button disabled={quantity === 0} onClick={() => handleClick(-1)}>
        -
      </button>
    </div>
  );
}
