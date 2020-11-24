// When you buy a Cheese, you get a second Cheese free!
// When you buy a Soup, you get a half price Bread!
// Get a third off Butter!

export const initItems = [
  {
    id: 0,
    name: "bread",
    price: 1.2,
    imgUrl: "assets/bread.jpeg",
    stock: 5,
    discount: 0,
    offer: null,
  },
  {
    id: 1,
    name: "milk",
    price: 0.5,
    imgUrl: "assets/milk.jpeg",
    stock: 7,
    offer: null,
  },
  {
    id: 2,
    name: "cheese",
    price: 0.9,
    imgUrl: "assets/cheese.jpeg",
    stock: 6,
    offer: {
      itemId: 2,
      description: "When you buy a Cheese, you can have a second Cheese free!",
      discount: (price, coupons) => ((coupons - (coupons % 2)) / 2) * price,
    },
  },
  {
    id: 3,
    name: "soup",
    price: 0.6,
    imgUrl: "assets/soup.jpeg",
    stock: 5,
    offer: {
      itemId: 0,
      description: "When you buy a Soup, you can have a half price Bread!",
      discount: (price, coupons) => price * coupons * 0.5,
    },
  },
  {
    id: 4,
    name: "butter",
    price: 1.2,
    imgUrl: "assets/butter.jpeg",
    stock: 5,
    offer: {
      itemId: 4,
      description: "Get a third off Butter!",
      discount: (price, coupons) => price * coupons * 0.5,
    },
  },
];

export const initCart = {
  cart: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};
