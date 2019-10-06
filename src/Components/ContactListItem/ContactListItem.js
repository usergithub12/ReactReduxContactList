import React from "react";
import { connect } from "react-redux";
import "./ContactListItem.css";
import {
  BTNCLICK,
  FAVORITECLICK,
  ONAVATAR
} from "../../Action/ContactListItemActions";

const ContactListItem = ({
  btnChange,
  btnText,
  avatar,
  favorite,
  BTNCLICK,
  FAVORITECLICK,
  ONAVATAR
}) => {
  // console.log(this.props);
  console.log("Favorite, ", favorite);

  const { name, desc, gender, onContactDelete } = this.props;

  let btnStyle = "btn btn-default";
  let btnStar = "fa fa-star-o fa-2x star";

  if (btnChange) {
    btnStyle = "btn btn-danger";
  }

  if (favorite) {
    btnStar = "fa fa-star fa-2x star";
  }

  const url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
  return (
    <li>
      <div className="media">
        <div className="media-left align-self-center">
          <img className="rounded-circle" src={url} />
        </div>
        <div className="media-body">
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
        <div className="media-right align-self-center">
          <a href="#" className="btn btn-warning" onClick={ONAVATAR}>
            Random ava
          </a>
          <a href="#" className={btnStyle} onClick={BTNCLICK}>
            {btnText}
          </a>
          <i className={btnStar} aria-hidden="true" onClick={FAVORITECLICK}></i>
          <i
            className="fa fa-times fa-2x remove"
            aria-hidden="true"
            onClick={onContactDelete}
          ></i>
        </div>
      </div>
    </li>
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
    BTNCLICK: () => dispatch(BTNCLICK()),
    FAVORITECLICK: () => dispatch(FAVORITECLICK()),
    ONAVATAR: () => dispatch(ONAVATAR())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListItem);
