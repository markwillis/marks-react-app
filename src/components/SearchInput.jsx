import React from "react";

class SearchInput extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({searchTerm: event.target.value})
    console.log(this.state.searchTerm)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="search"
          placeholder="Search for a joke..."
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <button className="button">Amuse me!</button>
      </form>
    );
  }
}

export default SearchInput;
