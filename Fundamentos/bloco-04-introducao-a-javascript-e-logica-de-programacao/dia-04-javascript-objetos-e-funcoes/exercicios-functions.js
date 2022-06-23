// let text = "How are you doing today?";
// const myArray = text.split(" ", 3);
// console.log(myArray)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.reverse());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");
// console.log(text)


///// Exercicio 1

function isAPalindromo(name){
    let getArray = name.split("")
    let getReverse = getArray.reverse()
    let getString = getReverse.join("")
    if (name === getString){
        return true;
    } 
    return false
}

console.log(isAPalindromo('calor'))

///// Exercicio 2

let inteiros = [2, 3, 6, 7, 10, 1];
function highValue(array){
    let highNumber = 0;
    for (let numberOne in array){
        for (let numberTwo in array){
            if(array[numberOne] > array[numberTwo]){
                highNumber = numberOne;
            } 
        }
    }
    return highNumber
}

console.log(highValue(inteiros))

///// Exercicio 3

let inteiros2 = [2, 4, 6, 7, 10, 0, -3];

function lowerValue(array){
    let lowerNumber;
    for (let numberOne in array){
        for (let numberTwo in array){
            if(array[numberOne] < array[numberTwo]){
                lowerNumber = numberOne;
            } 
        }
    }
    return lowerNumber
}

console.log(lowerValue(inteiros2))

///// Exercicio 4

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(example){
    let biggerName = example[0]
    for (let names = 1; names < example.length; names += 1){
        if (biggerName.length < example[names].length){
            biggerName = example[names];
        }
    }
    return biggerName
}

console.log(biggestName(nomes))


///// Exercicio 5

let numerosInteiros = [1, 2, 3, 2, 5, 8, 2, 3];


function contadorDeNumeroRepetido(array){
    let numeroMaisRepetido = 0;
    let contadorDeRepeticao = 0;
    let contadorAntigo = 0;

    for (let index in array){
            let numeroTeste = array[index];
            for (let index2 in array)
            if (array[index2] === numeroTeste){
                contadorDeRepeticao += 1;
            }
            if (contadorDeRepeticao > contadorAntigo){
                numeroMaisRepetido = array[index];
                contadorAntigo = contadorDeRepeticao;
            }
            contadorDeRepeticao = 0;    
        }
    return numeroMaisRepetido
}

console.log(contadorDeNumeroRepetido(numerosInteiros))

///// Exercicio 6

let valorN = 5;

function determinarSoma(valor){
    let numerosContidos = []
    let resultado = 0;
    for (let index = 0; index <= valor; index += 1){
        numerosContidos.push(index);
    }
    for (numero in numerosContidos){
        resultado += numerosContidos[numero];
    }
    return resultado
}

console.log(determinarSoma(valorN))

///// Exercicio 7

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

let word = 'trybe'
let ending = 'be'

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }

console.log(verificaFimPalavra(word, ending))