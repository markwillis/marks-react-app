import React from "react";
import PropTypes from 'prop-types'

class SearchInput extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleClick(event) {
    event.preventDefault()
    console.log(this.state.searchTerm)
    // I want to take the search term, and add it to the Joke API url
    // and then re-render the Jokes, based on that search term.
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <input
          type="text"
          className="search"
          placeholder="Search for a joke..."
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <button className="button">Amuse me!</button>
        <p>{this.state.searchTerm}</p>
      </form>
    );
  }
}

SearchInput.propTypes = {
  searchTerm: PropTypes.string
}

export default SearchInput;
