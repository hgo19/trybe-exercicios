import React from "react";
import Pokedex from './Components/pokedex';
import data from './data'

class App extends React.Component {
  render() {
    return (
      <>
        <header id='header'>
          <h1>Pokédex</h1>
        </header>
        <Pokedex data={data} />
      </>
    )
  }
}

export default App