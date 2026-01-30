export const initialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = state.cart.find(i => i.id === action.payload.id);

      if (item) {
        return {
          ...state,
          cart: state.cart.map(i =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          total: state.total + action.payload.price,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};
