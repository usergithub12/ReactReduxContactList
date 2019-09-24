import React, { Component } from "react";
import "./addContact.css";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      gender: null,
      desc: null
    };

    this.onGetValue = this.onGetValue.bind(this);
  }

  onGetValue(event) {
    console.log(event.target.value);
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      gender: this.state.gender,
      desc: this.state.desc
    };

    this.props.addContact(contact);
  };
  render() {
    return (
      <div className="col-md-10 offset-md-1 row-block">
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={this.onGetValue}
          />
          <div className="form-check">
            <input
              name="gender"
              className="form-check-input"
              type="radio"
              id="usergender1"
              value="women"
              onChange={this.onGetValue}
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
              onChange={this.onGetValue}
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
            onChange={this.onGetValue}
          />
          <button className="btn btn-success" type="submit">
            New Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
