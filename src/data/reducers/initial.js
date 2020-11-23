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
    offer: { itemId: 2, discount: (price, quantity) => (quantity / 2) * price },
  },
  {
    id: 3,
    name: "soup",
    price: 60,
    imgUrl: "assets/soup.jpeg",
    stock: 5,
    offer: { itemId: 0, discount: (price, quantity) => price * quantity * 0.5 },
  },
  {
    id: 4,
    name: "butter",
    price: 1.2,
    imgUrl: "assets/butter.jpeg",
    stock: 5,
    offer: { itemId: 4, discount: (price, quantity) => price * quantity * 0.5 },
  },
];

export const initCart = {
  cart: [],
  total: 0,
  discount: 0,
};
