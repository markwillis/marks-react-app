import React from 'react'
import SearchInput from './SearchInput'


function PageHeader(props) {
  return (
    <div className="hero">
        <h1>The <span>ULTIMATE</span> Dad joke collection</h1>
        <SearchInput />
    </div>
  )
}

export default PageHeader