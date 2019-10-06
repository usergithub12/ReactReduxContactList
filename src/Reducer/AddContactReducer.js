const initialState = {
  name: null,
  gender: null,
  desc: null
};
const AddContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ONGETVALUE":
      return state;
    case "SUBMIT":
      return state;
    default:
      return state;
  }
};
export default AddContactReducer;
