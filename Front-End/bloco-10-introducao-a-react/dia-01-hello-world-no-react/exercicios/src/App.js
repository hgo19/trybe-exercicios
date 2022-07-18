import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listaTarefas = ['Acordar', 'Lavar o Rosto', 'Almoçar', 'Estudar'];

class App extends React.Component {
  render () {
    return (
      <ol>
        {Task('correr')}
        { listaTarefas.map((tarefa) => Task(tarefa)) }
      </ol>
    );
  }
}

export default App;
