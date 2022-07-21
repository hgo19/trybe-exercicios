import React from "react";
import PokemonCard from './pokemonCard';

class Pokedex extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <main key='mainContent' className="main-content">
        {data.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </main>
    )
  }
}

export default Pokedex