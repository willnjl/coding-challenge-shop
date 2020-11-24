import React from "react";

export default function Availible({ unavailible, stock }) {
  return (
    <div className={`availible--${unavailible ? "out" : "in"}`}>
      {unavailible ? `sorry we're out` : `${stock} in stock`}
    </div>
  );
}
