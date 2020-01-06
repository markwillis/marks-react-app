import React from "react";


function Joke(props) {
  return (
    <div className="joke">
      <h3>{props.joke}</h3>
    </div>
  )
}

export default Joke;
