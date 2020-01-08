import React from "react";
import Joke from "./components/Joke";
import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";

const headers = { accept: "application/json" }

const LOADING_STATE = {
  resting: "resting",
  loaded: "Loaded",
  loading: "Loading... please wait",
  error: "Something went worng..."
};

class App extends React.Component {
  state = {
    jokeData: {
      results: []
    },
    searchTerm: "",
    loadingState: LOADING_STATE.resting
  };

  handleChange = event => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loadingState: LOADING_STATE.loading });
  };

  async fetchJokes() {
    const regex = /^[a-zA-Z0-9_]+$/
    try {
      const url =
        regex.test(this.state.searchTerm)
          ? `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}`
          : `https://icanhazdadjoke.com/search`;
      const fetchUrl = fetch(url, {
        method: "GET", headers: headers
      });
      const response = await fetchUrl;
      const myData = await response.json();
      this.setState({
        jokeData: { results: myData.results },
        loadingState: LOADING_STATE.loaded
      });
    } catch (e) {
      this.setState({ loadingState: LOADING_STATE.error });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loadingState === LOADING_STATE.loading) {
      this.fetchJokes();
    }
  }

  componentDidMount() {
    this.fetchJokes();
  }

  // This needs rendering inside a map function, then rendering in the render as <div>{jokeList}</div>
  // <Joke key="[ENTER THE KEY HERE]" joke={this.state}/>
  render() {
    const jokeList = this.state.jokeData.results.map(item => (
      <Joke key={item.id} joke={item.joke} />
    ));
    return (
      <div className="App">
        <PageHeader>
          <SearchInput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            placeholder="Search for a joke..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
        </PageHeader>
        <div className="joke-wrapper">
          {this.state.loadingState === LOADING_STATE.loaded
            ? jokeList
            : `${this.state.loadingState}`}
        </div>
      </div>
    );
  }
}

export default App;
