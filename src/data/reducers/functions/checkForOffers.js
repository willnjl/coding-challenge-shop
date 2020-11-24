// When you buy a Cheese, you get a second Cheese free!
// When you buy a Soup, you get a half price Bread!
// Get a third off Butter!

const applyOffers = (state) => {
  const { cart } = state;
  cart.forEach((item) => {
    //item has offer?
    if (item.offer) {
      //find item offer applies to
      let discountedItem = cart.find(
        (product) => product.id === item.offer.itemId
      );
      //if found calculate discount and add to cart item
      if (discountedItem) {
        discountedItem.discount = item.offer.discount(
          discountedItem.price,
          item.quantity
        );
      }
    }
  });

  return {
    ...state,
    cart,
  };
};

export default applyOffers;
