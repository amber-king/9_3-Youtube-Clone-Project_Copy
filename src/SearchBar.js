import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.setState = {};
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => searchHandler(event)}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            autoComplete="off"
          ></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

//make api call for search query
//