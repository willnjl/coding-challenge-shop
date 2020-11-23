import React from "react";
import Product from "../Product";

export default function Shop({ items }) {
  return items.map((item) => {
    return <Product item={item} />;
  });
}
