var initialState = [
  {
    id: 1,
    name: "Iphone 13",
    price: 1200,
    status: true,
  },
  {
    id: 2,
    name: "Vivo A5",
    price: 200,
    status: false,
  },
  {
    id: 3,
    name: "Samsung Galaxy A53",
    price: 500,
    status: false,
  },
  {
    id: 4,
    name: "Oppo F1s",
    price: 600,
    status: true,
  },
];

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default myReducers;
