const updateItems = (state, { item, quantity }) => {
  let { id } = item;
  let items = state.map((item, index) => {
    return index === id ? { ...item, stock: item.stock - quantity } : item;
  });
  return items;
};

export default updateItems;
