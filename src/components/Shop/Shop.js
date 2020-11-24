import React from "react";
import Product from "../Product";

export default function Shop({ items }) {
  return (
    <div className={"shop"}>
      {items.map((item) => {
        return <Product item={item} />;
      })}
    </div>
  );
}
