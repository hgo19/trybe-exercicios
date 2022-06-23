/////////////// Programa 1
const a = 10;
const b = 2;
const c = 11;

function soma(a, b) {
    return a + b;
}
console.log(soma(a, b))

function subtracao(a, b) {
    return a - b
}
console.log(subtracao(a, b))

function multiplicacao(a , b) {
    return a * b
}

console.log(multiplicacao(a, b))

function divisao(a, b){
    return a / b
}
console.log(divisao(a, b))

function resto(a, b){
    return a % b
}
console.log(resto(a, b))

/////////////// Programa 2

function maiorNumero(a, b){
let biggestNumber;
if (a > b) {
    biggestNumber = a;
} else {
    biggestNumber = b;
}
    return biggestNumber;
}
console.log(maiorNumero(a, b))

/////////////// Programa 3

function maiorEntreTres(a, b, c){
let bigThree = 0
    if (a > b && a > c) {
    bigThree = a;
} else if (b > a && b > c) {
    bigThree = b;
} else {
    bigThree = c;
}
    return bigThree;
}
console.log(maiorEntreTres(a, b, c), 'é o maior numero')

/////////////// Programa 4

const numero = 3;

function negativeOrPositive(numero){
  let isWhat = false;
    if (numero > 0) {
        isWhat = 'positive';
    } else if (numero < 0) {
        isWhat = 'negative';
    } else {
       isWhat = 'zero';
    }
    return isWhat
}
console.log(negativeOrPositive(numero))

/////////////// Programa 5

const anguloUm = 40;
const anguloDois = 40;
const anguloTres = 100;
const somaAngulos = anguloUm + anguloDois + anguloTres;

function triangulo(somaAngulos){
let isTriangle = false;
if (somaAngulos == 180 && somaAngulos > 0) {
    isTriangle = true;
} else {
    isTriangle = false;
}
    return isTriangle
}
console.log(triangulo(somaAngulos))