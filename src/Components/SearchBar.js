import { useState } from 'react';
// import { fetchVideos } from '../api/fetch';

const Search = ({ setVideos }) => {
  const [searchBar, setSearchBar] = useState('');

  const handleTextChange = (e) => {
    const title = e.target.value;
    setSearchBar(title);
  };

  // return (
  //   <div>
  //     <label htmlFor="searchTitle">
  //       Search Videos:
  //       <input
  //         type="text"
  //         value={searchBar}
  //         id="searchBar"
  //         onChange={handleTextChange}
  //       />
  //     </label>
  //     <button onClick={() => fetchVideos(searchBar, setVideos)}>Search</button>
  //   </div>
  // );
};



export default Search;
