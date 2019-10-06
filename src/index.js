import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//Redux
import { createStore } from "redux";

import { Provider } from "react-redux";
import RootReducer from "./Reducer/RootReducer";
// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";

const storeMy = createStore(RootReducer);
console.log("storeMy => ", storeMy.getState());
const App = () => {
  // const showContacts = SHOWCONTACT(List, findContact);

  return (
    <section className="row-section">
      <div className="container">
        <Provider store={storeMy}>
          <Header />
          <ContactList />
          {/* <AddContact addContact={ADDCONTACT} /> */}
        </Provider>
      </div>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
