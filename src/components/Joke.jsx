import React from "react";

class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      jokeData: {
        results: [
          {
            joke: "Loading..."
          }
        ]
      }
    };
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

  render() {
    const jokes = this.state.jokeData.results.map(item => (
      <div className="joke">
        <p>{item.joke}</p>
      </div>
    ));
    return <React.Fragment>{jokes}</React.Fragment>;
  }
}

export default Joke;
