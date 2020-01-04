import React from 'react';
import Joke from './components/Joke'
import PageHeader from './components/PageHeader.jsx'

function App() {
  return (
    <div className="App">
      <PageHeader />
      <div className="joke-wrapper">
        <Joke />
      </div>
    </div>
  );
}

export default App;
