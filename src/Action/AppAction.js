export const FAVORITE = id => {
  this.setState(state => {
    const index = this.state.List.findIndex(elem => elem.id === id);

    const newFavorite = this.state.List.slice();
    newFavorite[index].favorite = !newFavorite[index].favorite;
    return {
      favorite: !this.newFavorite
    };
  });
};

export const SEARCH = searchName => {
  console.log("searchName => ", searchName);
  this.setState({
    findContact: searchName
  });
};

export const SHOWCONTACT = (items, searchValue) => {
  console.log("items from show contact", items);
  if (searchValue.length === 0) {
    return items;
  }
  return items.filter(item => {
    return (
      item.contactName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  });
};
export const ADDCONTACT = contact => {
  console.log(
    "Name: ",
    contact.name,
    " Gender: ",
    contact.gender,
    " Desc: ",
    contact.desc
  );

  this.setState(state => {
    const newList = this.state.List.slice();
    const person = {
      id: this.state.counter++,
      name: contact.name,
      gender: contact.gender,
      desc: contact.desc,
      avatar: Math.floor(Math.random() * 99)
    };
    newList.push(person);
    return {
      List: newList
    };
  });
};
export const DELETE = id => {
  console.log("onContactDelete => ", id);
  this.setState(state => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    //console.log("index", index);

    const firstPart = this.state.List.slice(0, index);
    const lastPart = this.state.List.slice(index + 1);
    const newList = [...firstPart, ...lastPart];

    return {
      List: newList
    };
  });
};
