import { ADD_ITEM, REMOVE_ITEM } from '../actions';
import { addItemToCart, removeItemFromCart } from './helper';

const INITIAL_STATE = {
    cartItems: []
  };

function cartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.item)
      }
    case REMOVE_ITEM:
      return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.item)
      }
    default: 
      return state;
  }
}

export default cartReducer;