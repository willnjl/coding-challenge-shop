import React from "react";
import { Link } from "react-router-dom";

export default function PayNow() {
  return (
    <Link to={"/pay"}>
      <button class={"btn-paynow"}>Pay now</button>
    </Link>
  );
}
