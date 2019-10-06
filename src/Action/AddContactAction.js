export const ONGETVALUE = event => {
  console.log(event.target.value);
  const target = event.target;
  const value = event.target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
};

export const SUBMIT = e => {
  e.preventDefault();
  const contact = {
    name: this.state.name,
    gender: this.state.gender,
    desc: this.state.desc
  };

  this.props.addContact(contact);
};
