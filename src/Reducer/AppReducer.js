const initialState = {
  List: [
    {
      id: 1,
      name: "Camilla Tery",
      desc:
        "Camilla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      avatar: 50,
      gender: "women",
      favorite: true
    },
    {
      id: 2,
      name: "Will Smith",
      desc:
        "Will Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      avatar: 12,
      gender: "men"
    },
    {
      id: 3,
      favorite: false,
      name: "Arnold Swarz",
      desc:
        "Arnold Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      avatar: 96,
      gender: "men"
    }
  ],
  findContact: "",
  counter: 100
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAVORITE":
      return state;
    case "SEARCH":
      return state;
    case "SHOWCONTACT":
      return state;
    case "ADDCONTACT":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
};
export default AppReducer;
