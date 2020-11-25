import React from "react";
import Product from "../Product";

export default function Shop({ items }) {
  return (
    <section className={"shop"}>
      {items.map((item) => {
        return <Product item={item} />;
      })}
    </section>
  );
}
