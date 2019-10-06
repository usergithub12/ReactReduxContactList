const initialState = {
  search: ""
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return state;
    default:
      return state;
  }
};
export default SearchReducer;
