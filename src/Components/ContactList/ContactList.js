import React, { Fragment } from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import Search from "../Search/Search";
import { connect } from "react-redux";
import {
  SHOWCONTACT,
  ADDCONTACT,
  DELETE,
  FAVORITE,
  SEARCH
} from "../../Action/AppAction";
const ContactList = ({ List, FAVORITE, DELETE, SEARCH }) => {
  console.log("List= ", List);
  const newItem = List.map(item => {
    return (
      <ContactListItem
        key={item.id}
        id={item.id}
        name={item.name}
        desc={item.desc}
        avatar={item.avatar}
        gender={item.gender}
        favorite={item.favorite}
        onFavoriteChange={() => FAVORITE(item.id)}
        onContactDelete={() => DELETE(item.id)}
      />
    );
  });

  return (
    <Fragment>
      <Search onSearch={SEARCH} />
      <div className="col-md-10 offset-md-1 row-block">
        <ul id="sortable">{newItem}</ul>
      </div>
    </Fragment>
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
)(ContactList);
