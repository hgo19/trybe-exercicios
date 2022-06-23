// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let dezFatorial = [];

for (let index = 0; index < 10; index += 1){
    let multiplicacao = (10 - index) * 10;
    dezFatorial.push(multiplicacao)
}

console.log(dezFatorial)

// Inverta a palavra

let word = 'tryber';
let palavraInvertida = '';
for (let index = 0; index < word.length; index += 1){
    palavraInvertida += word[word.length - 1 - index]
}
console.log(palavraInvertida)

//Retorne a maior e a menor palavra do array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]

for(let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index]
    }
}
console.log(maiorPalavra)

//Maior numero primero entre 0 e 50

let maiorNumeroPrimo = 0;

for (let primeiroNumero = 0; primeiroNumero <= 50; primeiroNumero += 1){
    let primo = true;
    for (let segundoNumero = 2; segundoNumero < primeiroNumero; segundoNumero += 1){
        if (primeiroNumero % segundoNumero === 0){
            primo = false;
        }
    }
    if (primo){
        maiorNumeroPrimo = primeiroNumero;
    }
}

console.log(maiorNumeroPrimo)

//Exercicio Bonus

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let geometricForm = '*' * n;
