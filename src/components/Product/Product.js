import React, { useState, useEffect } from "react";
import Availible from "./Availible";
import Price from "./Price";
import Quantity from "./buttons/Quantity";
import AddToCart from "./buttons/AddToCart";

export default function Product({ item, handleSubmit }) {
  const [quantity, setQuantity] = useState(0);

  const handleClick = (val) => {
    setQuantity(quantity + val);
  };

  useEffect(() => {
    setQuantity(0);
  }, [item.stock]);

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.imgUrl} />
      <Price price={item.price} />
      <Availible stock={item.stock} />
      {/* <Offer /> */}
      <Quantity
        stock={item.stock}
        quantity={quantity}
        handleClick={handleClick}
      />
      <AddToCart handleSubmit={() => handleSubmit(item, quantity)} />
    </div>
  );
}
