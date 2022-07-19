import React from "react";

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    const { value, measurementUnit} = averageWeight;
    return (
      <section className="cards">
        <div className="poketext">
          <p><span>Name:</span> {name}</p>
          <p><span>Type:</span> {type}</p>
          <p><span>Average Weight:</span> {value}{measurementUnit}</p>
        </div>
        <img class='pokeimg' src={image} alt={name}></img>
      </section>
    )
  }
}

export default PokemonCard