//////// Exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda.', info.personagem + '.')

/////// Exercicio 2

  info['recorrente']='Sim';

  console.log(info)

////// Exercicio 3

for (let key in info){
    console.log(key)
}

////// Exercicio 4

for (let key in info){
    console.log(info[key])
}

///// Exercicio 5

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (let key in info) {
    if (
      key === 'recorrente' &&
      info[key] === 'Sim' &&
      infoPatinhas[key] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + infoPatinhas[key]);
    }
  }

///// Exercicio 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de', leitor.nome, 'se chama', leitor.livrosFavoritos[0].titulo + '.')

  ///// Exercicio 7

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.')
