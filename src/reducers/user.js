export default (state, { type, payload }) => {
  switch (type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        user: payload
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        user: {}
      };

    default: {
      return state;
    }
  }
};
