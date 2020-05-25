export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function addItemToCart(item) {
  const action = {
    type: ADD_ITEM,
    item
  };
  return action;
}

export function removeItemFromCart(item) {
  const action = {
    type: REMOVE_ITEM,
    item
  };
  return action;
}