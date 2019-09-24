import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: " "
  };

  onSearch = e => {
    //console.log(e.target.value);
     const findContact = e.target.value;
     this.setState({
       search: findContact
     });
    this.props.onSearch(findContact);
  };

  render() {
    return (
      <div className="col-md-10 offset-md-1 row-block">
        <input
          onChange={this.onSearch}
          name="Search"
          className="form-control searchInput"
          placeholder="Search..."
        />
      </div>
    );
  }
}
export default Search;