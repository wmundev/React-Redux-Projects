export const addCartItem = (items, newItem) => {
  const foundItem = items.find(item => item.id === newItem.id);
  if (foundItem) {
    return items.map(item => {
      if (foundItem.id === item.id) {
        item.quantity += 1;
      }
      return item;
    });
  }
  return [...items, { ...newItem, quantity: 1 }];
};
