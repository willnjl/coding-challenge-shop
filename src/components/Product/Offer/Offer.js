import React from "react";

export default function Offer({ item, cart }) {
  return (
    <div className={"offer"}>
      <span>{item.offer ? item.offer.description : null}</span>
    </div>
  );
}
