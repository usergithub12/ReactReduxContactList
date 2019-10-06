const initialState = {
  btnChange: false,
  btnText: "Contact Now",
  avatar: "",
  favorite: ""
};
const ContactListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BTNCLICK":
      return state;
    case "FAVORITECLICK":
      return state;
    case "ONAVATAR":
      return state;
    default:
      return state;
  }
};
export default ContactListItemReducer;
