import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.setState = {};
  }
  render() {
    const { searchHandler, inputHandler, userInput } = this.props;
    return (
      <div>
        <form onSubmit={(event) => searchHandler(event)}>
          <div className='search-container'> 
          <input
             onChange={inputHandler}
            value={userInput}
            type="text"
            placeholder="Search">
          </input>

          <button className='search-button' id="submit-button" type="submit"  >
            <img className='search-icon' src='' ></img>
          </button>
        </div>
      </form>
    );



export default SearchBar;
