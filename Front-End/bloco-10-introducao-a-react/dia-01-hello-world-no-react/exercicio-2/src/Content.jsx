import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((e) => (
          <div key={e.conteudo} className='lessons'>
            <p><span className="category">O conteúdo é:</span> {e.conteudo};</p>
            <p><span className="category">Status:</span> {e.status};</p>
            <p><span className="category">Bloco:</span> {e.bloco};</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Content;
