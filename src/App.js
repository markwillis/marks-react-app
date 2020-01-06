import React from "react";
import Joke from "./components/Joke";
import PageHeader from "./components/PageHeader";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokeData: {
        results: []
      }
    }
  }

  async componentDidMount() {
    const url = 'https://icanhazdadjoke.com/search?term="cat"';
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
        <PageHeader />
        <div className="joke-wrapper">
          {jokeList}
        </div>
      </div>
    );
  }
}

export default App;
