import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//Redux
import { createStore } from "redux";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import RootReducer from "./Reducer/RootReducer";
// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";
import {
  SHOWCONTACT,
  ADDCONTACT,
  DELETE,
  FAVORITE,
  SEARCH
} from "./Action/AppAction";

const storeMy = createStore(RootReducer);
console.log("storeMy => ", storeMy.getState());
const App = (List, findContact, counter) => {
  // const showContacts = SHOWCONTACT(List, findContact);

  console.log("List", List);
  return (
    <section className="row-section">
      <div className="container">
        <Provider store={storeMy}>
          <Header />
          <ContactList
            ContactList={List}
            onFavoriteChange={FAVORITE}
            onContactDelete={DELETE}
            onSearch={SEARCH}
          />
          <AddContact addContact={ADDCONTACT} />
        </Provider>
      </div>
    </section>
  );
};
const mapStateToProps = ({ AppReducer }) => {
  // Деструктуризація. Дістаємо необхідний redcer
  console.log("state from app reducer = > ", AppReducer);
  console.log("from map state to props", AppReducer.List);
  return {
    List: AppReducer.List,
    findContact: AppReducer.List,
    counter: AppReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    FAVORITE: () => dispatch(FAVORITE()),
    SEARCH: () => dispatch(SEARCH()),
    SHOWCONTACT: () => dispatch(SHOWCONTACT()),
    ADDCONTACT: () => dispatch(ADDCONTACT()),
    DELETE: () => dispatch(DELETE())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(<App />, document.getElementById("root"));
