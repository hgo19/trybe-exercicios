const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [firstContent, secondContent] = saudacoes;
secondContent(firstContent);

console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];