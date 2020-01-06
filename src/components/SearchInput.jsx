import React from "react";

function SearchInput(props) {
  
  return (
    <form onSubmit={props.handleClick}>
      <input
        type="text"
        className="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.searchTerm}
      />
      <button className="button">Amuse me!</button>
      <p>{props.searchTerm}</p>
    </form>
  );
}

export default SearchInput;
