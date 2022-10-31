import { CHANGE_NAME, GET_BANNER } from "./constances";

const initState = {
  banner: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: "lizien" };
    case GET_BANNER:
      return { ...state, banner: action.banner };
    default:
      return state;
  }
}
export default reducer;
