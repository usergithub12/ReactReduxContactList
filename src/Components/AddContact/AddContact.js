import React, { Component } from "react";
import "./addContact.css";
import { connect } from "react-redux";
import { ONGETVALUE, SUBMIT } from "../../Action/AddContactAction";

const AddContact = () => {
  return (
    <div className="col-md-10 offset-md-1 row-block">
      <form onSubmit={SUBMIT}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="form-control"
          onChange={ONGETVALUE}
        />
        <div className="form-check">
          <input
            name="gender"
            className="form-check-input"
            type="radio"
            id="usergender1"
            value="women"
            onChange={ONGETVALUE}
          />
          <label className="form-check-label" htmlFor="usergender1">
            Women
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="usergender2"
            value="men"
            onChange={ONGETVALUE}
          />
          <label className="form-check-label" htmlFor="usergender2">
            Men
          </label>
        </div>
        <textarea
          name="desc"
          type="text"
          placeholder="Description"
          className="form-control"
          onChange={ONGETVALUE}
        />
        <button className="btn btn-success" type="submit">
          New Contact
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ AddContactReducer }) => {
  // Деструктуризація. Дістаємо необхідний redcer
  console.log("state = > ", AddContactReducer);
  return {
    name: AddContactReducer.name,
    gender: AddContactReducer.gender,
    desc: AddContactReducer.desc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ONGETVALUE: () => dispatch(ONGETVALUE()),
    SUBMIT: () => dispatch(SUBMIT())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);
