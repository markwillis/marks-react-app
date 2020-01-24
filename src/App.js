import React, {useState, useEffect} from "react";
import Joke from "./components/Joke";
import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";
import Footer from './components/Footer'

const headers = { accept: "application/json" }
let url;

const LOADING_STATE = {
  resting: "resting",
  loaded: "Loaded",
  loading: "Loading... please wait",
  error: "Something went worng..."
};

function App(props) {
  const [jokeData, setJokeData] = useState({ })
  const [searchTerm, setSearchTerm] = useState("hat")
  const [loadingState, setLoadingState] = useState(LOADING_STATE.resting)
  

  function handleChange(event) {
    const {value} = event.target
    setSearchTerm(value);
    console.log("hello")
  };

  function handleSubmit(event){
    event.preventDefault();
    setLoadingState(LOADING_STATE.loading);
    fetchJokes()
  };

  function checkInput(string) {
    const regex = /^[a-zA-Z0-9_]+$/
    regex.test(string) 
      ? url = `https://icanhazdadjoke.com/search?term=${searchTerm}`
      : url = `https://icanhazdadjoke.com/search`;
  }

  async function fetchJokes() {
    setLoadingState(LOADING_STATE.loading)
    checkInput(searchTerm)
    try {
      const fetchUrl = fetch(url, {
        method: "GET", headers: headers
      });
      const response = await fetchUrl;
      const myData = await response.json();
      setJokeData(myData)
      setLoadingState(LOADING_STATE.loaded)
    } catch (e) {
        setLoadingState(LOADING_STATE.error)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <div className="App">
      <PageHeader>
        <SearchInput
          handleSubmit={handleSubmit}
          placeholder="Search for a joke..."
          onChange={handleChange}
          value={searchTerm}
        />
      </PageHeader>
      <div className="joke-wrapper">
        {loadingState === LOADING_STATE.loaded
          ? jokeData.results.map(item => <Joke key={item.id} joke={item.joke} />)
          : `${loadingState}`}
      </div>
      <Footer />
    </div>
  );
}

export default App;
