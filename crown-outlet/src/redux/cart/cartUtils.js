export const addCartItem = (items, newItem) => {
  const foundItem = items.find(item => item.id === newItem.id);
  if (foundItem) {
    return items.map(item => {
      if (foundItem.id === item.id) {
        item.quantity += 1;
        return { ...item };
      }
      return item;
    });
  }
  return [...items, { ...newItem, quantity: 1 }];
};

export const removeCartItem = (items, targetItem) => {
  const foundItem = items.find(item => item.id === targetItem.id);
  if (foundItem.quantity > 1) {
    return items.map(item => {
      if (item.id === foundItem.id) {
        item.quantity -= 1;
        return { ...item };
      }
      return item;
    });
  } else {
    return items.filter(item => item.id !== foundItem.id);
  }
};
