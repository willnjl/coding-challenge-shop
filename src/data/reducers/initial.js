// When you buy a Cheese, you get a second Cheese free!
// When you buy a Soup, you get a half price Bread!
// Get a third off Butter!

export const initItems = [
  {
    id: 0,
    name: "toilet roll",
    price: 10.99,
    imgUrl: "assets/tp.jpeg",
    stock: 0,
    offer: null,
  },
  {
    id: 1,
    name: "bread",
    price: 1.2,
    imgUrl: "assets/bread.jpeg",
    stock: 5,
    discount: 0,
    offer: null,
  },
  {
    id: 2,
    name: "milk",
    price: 0.5,
    imgUrl: "assets/milk.jpeg",
    stock: 7,
    offer: null,
  },
  {
    id: 3,
    name: "cheese",
    price: 0.9,
    imgUrl: "assets/cheese.jpeg",
    stock: 6,
    offer: {
      itemId: 3,
      description: "Two for the price of one!",
      discount: (price, coupons) => ((coupons - (coupons % 2)) / 2) * price,
    },
  },
  {
    id: 4,
    name: "soup",
    price: 0.6,
    imgUrl: "assets/soup.jpeg",
    stock: 5,
    offer: {
      itemId: 1,
      description: "Buy soup and get a bread half price!",
      discount: (price, coupons) => price * coupons * 0.5,
    },
  },

  {
    id: 5,
    name: "butter",
    price: 1.2,
    imgUrl: "assets/butter.jpeg",
    stock: 5,
    offer: {
      itemId: 5,
      description: "Butter is a third off!",
      discount: (price, coupons) => (price * coupons) / 3,
    },
  },
];

export const initCart = {
  cart: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};
