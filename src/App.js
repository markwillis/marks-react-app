import React from "react";
import Joke from "./components/Joke";
import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    jokeData: {
      results: []
    },
    searchTerm: "",
    loadingState: "resting"
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ loadingState: "loading" });
  };

  async fetchJokes() {
    try {
      const url =
        this.state.searchTerm === ""
          ? `https://icanhazdadjoke.com/search`
          : `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}`;
      const fetchUrl = fetch(url, {
        method: "GET",
        headers: { accept: "application/json" }
      });
      const response = await fetchUrl;
      const myData = await response.json();
      this.setState({
        jokeData: { results: myData.results },
        loadingState: "loaded"
      });
    } catch (e) {
      this.setState({ loadingState: "Something went wrong" });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loadingState === "loading") {
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
            handleClick={this.handleClick}
            placeholder="Search for a joke..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
        </PageHeader>
        <div className="joke-wrapper">
          {this.state.loadingState === "loaded"
            ? jokeList
            : `${this.state.loadingState}`}
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchTerm: PropTypes.string
};

export default App;
