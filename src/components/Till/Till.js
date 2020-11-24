import React from "react";

const convertToCurrency = (price) => {
  return `£ ${price.toFixed(2)}`;
};

export default function Till({ cart }) {
  return (
    <div class="till">
      <table class="table">
        <thead class="head">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Cost</th>
            <th scope="col">Saving</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {cart.cart.map((item) => {
            const { name, price, quantity, discount } = item;
            return (
              <tr>
                <th scope="row">{name}</th>
                <td>{convertToCurrency(price)}</td>
                <td>{quantity}</td>
                <td>{convertToCurrency(price * quantity)}</td>
                <td>{convertToCurrency(discount)}</td>
                <td>{convertToCurrency(price * quantity - discount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table class="sum">
        <tbody>
          <tr>
            <th scope={"row"}>subtotal</th>
            <td>{"£" + cart.subtotal}</td>
          </tr>
          <tr>
            <th scope={"row"}>Total</th>
            <td>{"£" + cart.total}</td>
          </tr>
          <tr>
            <th scope={"row"}>Saving</th>
            <td>{"£" + cart.discount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
