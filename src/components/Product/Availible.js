import React from "react";

export default function Availible({ stock }) {
  return (
    <div>
      {stock > 0
        ? `${stock} remaining in stock`
        : `We're sorry we're out of stock`}
    </div>
  );
}
