const updateItems = (state, { item, quantity }) => {
  const result = [...state];
  result[item.id].stock = result[item.id].stock + quantity * -1;
  return result;
};

export default updateItems;
