import React, { useState, useEffect } from "react";
import Availible from "./Availible";
import Price from "./Price";
import Quantity from "./buttons/Quantity";
import AddToCart from "./buttons/AddToCart";
import Offer from "./Offer";

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

  let shadow = item.id % 5;

  return (
    <div class={"product shadow--" + shadow}>
      <h2>{item.name}</h2>
      <img class={"img"} src={item.imgUrl} />
      <Availible unavailible={unavailible} stock={item.stock} />
      <Price price={item.price} />
      <Quantity
        stock={item.stock}
        quantity={quantity}
        handleClick={handleClick}
        unavailible={unavailible}
      />
      <AddToCart
        handleSubmit={() => handleSubmit(item, quantity)}
        unavailible={unavailible || quantity === 0}
      />
      <Offer id={item.id} />
    </div>
  );
}
