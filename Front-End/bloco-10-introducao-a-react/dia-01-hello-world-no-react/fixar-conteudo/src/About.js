import { render } from "@testing-library/react";
import React, { Component } from "react";

class About extends Component {
  render() {
    const skills = ['Git&Github', 'HTML', 'CSS', 'Javascript', 'ES6']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);
    const info = (
      <div>
        <h1>Hugo Leonardo</h1>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
        <p>Tenho 25 anos, moro em Angra dos Reis - RJ. Estou cursando Desenvolvimento em Software na Trybe.</p>
      </div>
    );
    return info;
  }
}

export default About
