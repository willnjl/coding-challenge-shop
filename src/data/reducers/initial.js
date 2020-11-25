// When you buy a Cheese, you get a second Cheese free!
// When you buy a Soup, you get a half price Bread!
// Get a third off Butter!

export const initItems = [
  {
    id: 0,
    name: "toilet roll",
    price: 10.99,
    imgUrl:
      "https://github.com/willnjl/coding-challenge-shop/blob/6ce9d1e333e3a4766ba118f46bc23749b939233d/public%2Fassets%2Ftp.jpeg?raw=true",
    stock: 0,
    offer: null,
  },
  {
    id: 1,
    name: "bread",
    price: 1.2,
    imgUrl:
      "https://github.com/willnjl/coding-challenge-shop/blob/dd50d71a6b5c02af3cce85c3a9f68d1975cb4e39/public%2Fassets%2Fbread.jpeg?raw=true",
    stock: 5,
    discount: 0,
    offer: null,
  },
  {
    id: 2,
    name: "milk",
    price: 0.5,
    imgUrl:
      "https://github.com/willnjl/coding-challenge-shop/blob/dd50d71a6b5c02af3cce85c3a9f68d1975cb4e39/public%2Fassets%2Fmilk.jpeg?raw=true",
    stock: 7,
    offer: null,
  },
  {
    id: 3,
    name: "cheese",
    price: 0.9,
    imgUrl:
      "https://github.com/willnjl/coding-challenge-shop/blob/dd50d71a6b5c02af3cce85c3a9f68d1975cb4e39/public%2Fassets%2Fcheese.jpeg?raw=true",
    stock: 6,
    offer: {
      itemId: 3,
      description: "Two for the price of one!",
      discount: ({ price }, coupons) => ((coupons - (coupons % 2)) / 2) * price,
    },
  },
  {
    id: 4,
    name: "soup",
    price: 0.6,
    imgUrl:
      "https://github.com/willnjl/coding-challenge-shop/blob/dd50d71a6b5c02af3cce85c3a9f68d1975cb4e39/public%2Fassets%2Fsoup.jpeg?raw=true",
    stock: 5,
    offer: {
      itemId: 1,
      description: "Buy soup and get a bread half price!",
      // (bread / 2 )per soup
      discount: ({ price, quantity }, coupons) => {
        let x = (price * quantity) / 2;
        let y = (coupons * price) / 2;

        return x < y ? x : y;
      },
    },
  },
  {
    id: 5,
    name: "butter",
    price: 1.2,
    imgUrl:
      "https://github.com/willnjl/coding-challenge-shop/blob/dd50d71a6b5c02af3cce85c3a9f68d1975cb4e39/public%2Fassets%2Fbutter.jpeg?raw=true",
    stock: 5,
    offer: {
      itemId: 5,
      description: "Butter is a third off!",
      discount: ({ price }, coupons) => (price * coupons) / 3,
    },
  },
];

export const initCart = {
  cart: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};
