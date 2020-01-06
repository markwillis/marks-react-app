import React from "react";
import Joke from "./components/Joke";
import PageHeader from "./components/PageHeader";
import SearchInput from "./components/SearchInput";
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokeData: {
        results: []
      },
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleClick(event) {
    event.preventDefault()
    return this.state.searchTerm
    // I want to take the search term, and add it to the Joke API url
    // and then re-render the Jokes, based on that search term.
  }

  async componentDidMount() {
    const url = `https://icanhazdadjoke.com/search?term=dog`;
    const fetchUrl = fetch(url, {
      method: "GET",
      headers: { accept: "application/json" }
    });
    const response = await fetchUrl;
    const myData = await response.json();
    this.setState({ jokeData: { results: myData.results } });
  }

  // This needs rendering inside a map function, then rendering in the render as <div>{jokeList}</div>
  // <Joke key="[ENTER THE KEY HERE]" joke={this.state}/>
  render() {
    const jokeList = this.state.jokeData.results.map(item => (
      <Joke key={item.id} joke={item.joke} />
    ))
    return (
      <div className="App">
        <PageHeader>
          <SearchInput
            handleChange={this.handleChange}
            handlClick={this.handlClick}
            placeholder="Search for a joke..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
        </PageHeader>
        <div className="joke-wrapper">
          {jokeList}
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchTerm: PropTypes.string
}

export default App;
