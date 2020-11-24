import React, { useState, useEffect } from "react";
import Availible from "./Availible";
import Price from "./Price";
import Quantity from "./buttons/Quantity";
import AddToCart from "./buttons/AddToCart";

export default function Product({ item, handleSubmit }) {
  const [quantity, setQuantity] = useState(0);
  const [unavailible, setUnavailible] = useState(false);

  const handleClick = (val) => {
    setQuantity(quantity + val);
  };

  useEffect(() => {
    setQuantity(0);
    if (item.stock === 0) {
      setUnavailible(true);
    }
  }, [item.stock]);

  return (
    <div>
      {/* <h2>{item.name}</h2>
      <img src={item.imgUrl} />
      <Price price={item.price} /> */}
      <Availible unavailible={unavailible} stock={item.stock} />
      {/* <Offer /> */}
      <Quantity
        stock={item.stock}
        quantity={quantity}
        handleClick={handleClick}
        unavailible={unavailible}
      />
      <AddToCart
        handleSubmit={() => handleSubmit(item, quantity)}
        unavailible={unavailible}
      />
    </div>
  );
}
