export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
