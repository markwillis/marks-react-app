import React from 'react'

function SearchInput() {
  return (
    <form>
      <input type="text" className="search" placeholder="Search for a joke..."/>
      <button className="button">Amuse me!</button>
    </form>
  )
}

export default SearchInput