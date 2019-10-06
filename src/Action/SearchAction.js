export const SEARCH = e => {
  //console.log(e.target.value);
  const findContact = e.target.value;
  this.setState({
    search: findContact
  });
  this.props.onSearch(findContact);
};
