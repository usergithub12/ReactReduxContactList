import React from "react";
import "./Search.css";

import { connect } from "react-redux";

import { SEARCH } from "../../Action/SearchAction";

const Search = () => {
  return (
    <div className="col-md-10 offset-md-1 row-block">
      <input
        onChange={SEARCH}
        name="Search"
        className="form-control searchInput"
        placeholder="Search..."
      />
    </div>
  );
};

const mapStateToProps = ({ SearchReducer }) => {
  // Деструктуризація. Дістаємо необхідний redcer
  console.log("state = > ", SearchReducer);
  return {
    search: SearchReducer.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SEARCH: () => dispatch(SEARCH())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
