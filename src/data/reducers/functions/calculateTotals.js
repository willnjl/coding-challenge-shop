const calculateTotals = (state) => {
  const { cart } = state;

  const subtotal = cart
    .reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0)
    .toFixed(2);
  const discount = cart
    .reduce((total, item) => {
      return (total += item.discount);
    }, 0)
    .toFixed(2);

  const total = (subtotal - discount).toFixed(2);

  return {
    ...state,
    subtotal,
    discount,
    total,
  };
};

export default calculateTotals;
