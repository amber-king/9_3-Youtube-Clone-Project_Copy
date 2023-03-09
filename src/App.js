import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  
  // helper function to test api key fucntionality -- v
  const testYoutubeAPI = () => {
    console.log(process.env.REACT_APP_YOTUBE_API_KEY)
    //fetch('');
  }

  useEffect (()=>{
    testYoutubeAPI()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
