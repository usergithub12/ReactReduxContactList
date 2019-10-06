export const BTNCLICK = () => {
  if (!this.state.btnChange) {
    this.setState({
      btnChange: true,
      btnText: "Clicked"
    });
  } else {
    this.setState({
      btnChange: false,
      btnText: "Contact Now"
    });
  }
};

export const FAVORITECLICK = () => {
  this.setState(() => {
    return {
      favorite: !this.state.favorite
    };
  });
  this.props.onFavoriteChange();
};

export const ONAVATAR = () => {
  const newAvatar = Math.floor(Math.random() * 99);
  //console.log(newAvatar);
  this.setState({
    avatar: newAvatar
  });
};
