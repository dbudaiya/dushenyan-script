export default function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counte: state.counte + 1 };
    case "decrement":
      return { ...state, counte: state.counte - 1 };
    default:
      return state;
  }
}
