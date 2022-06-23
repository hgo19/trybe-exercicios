/////////////// Programa 1

const a = 10;
const b = 2;
const c = 11;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/////////////// Programa 2

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

/////////////// Programa 3

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

/////////////// Programa 4

const numero = -3;

if (numero > 0) {
    console.log("positive");
} else if (numero < 0) {
    console.log("negative");
}
    else {
        console.log("zero");
    }

/////////////// Programa 5

const anguloUm = 40;
const anguloDois = 40;
const anguloTres = 100;
const somaAngulos = anguloUm + anguloDois + anguloTres;


<<<<<<< HEAD
// if (somaAngulos == 180 && somaAngulos > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
=======
if (somaAngulos == 180 && somaAngulos > 0) {
    console.log("true");
} else {
    console.log("false");
}
>>>>>>> exercicios/4.1

/////////////// Programa 6

const pecaXadrez = "DAMA";

switch (pecaXadrez.toLowerCase()) {
    case "bispo":
        console.log("várias casas em diagonais");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "peao":
        console.log("apenas uma casa para frente e captura nas diagonais");
        break;
    case "torre":
        console.log("várias casas em colunas e em linhas");
        break;
    case "dama":
        console.log("várias casas em diagonais, colunas e linhas");
        break;
    case "rei":
        console.log("apenas uma casa em diagonais, colunas e linhas");
        break;

    default:
        console.log("ERRO NO SISTEMA");
}


/////////////// Programa 7

const notaAluno = 130;

if (notaAluno < 0 || notaAluno > 100 ) {
    console.log("Nota inválida")
} else if (notaAluno >= 90) {
    console.log("A");
} else if (notaAluno >= 80) {
    console.log("B");
} else if (notaAluno >= 70) {
    console.log("C");
} else if (notaAluno >= 60) {
    console.log("D");
} else if (notaAluno >= 50) {
    console.log("E");
} else if (notaAluno < 50) {
    console.log("F");
} else {
    console.log("Digite a nota do aluno, apenas os numeros.");
}


/////////////// Programa 8

const numberOne = 14;
const numberTwo = 25;
const numberThree = 30;

if (numberOne % 2 == 0 || numberTwo % 2 == 0 || numberThree % 2 == 0) {
    console.log("true");
} else {
    console.log("false");
}

/////////////// Programa 9

if (numberOne % 2 > 0 || numberTwo % 2 > 0 || numberThree % 2 > 0) {
    console.log("true");
} else {
    console.log("false");
}

/////////////// Programa 10

const custoProduto = 23;
const valorVenda = 75;


if (custoProduto > 0 && valorVenda > 0) {
    const calculoImposto = custoProduto / 100
    const impostoSobreOCusto = calculoImposto * 20;
    const custoTotal = custoProduto + impostoSobreOCusto;
    const lucro = valorVenda - custoTotal;
    const lucroTotal = lucro * 1000;
    console.log(lucroTotal + " de lucro total.")
} else {
    console.log("error")
}

/////////////// Programa 11

const salarioBruto = 3000;
let descontoInss = 0;
let contaPorcentagem = salarioBruto / 100;

if (salarioBruto <= 1556.94 && salarioBruto <= 1903.98) {
    descontoInss = contaPorcentagem * 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = contaPorcentagem * 9;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = contaPorcentagem * 11;
} else {
    descontoInss = 570.88;
}

let impostoDeRenda;
let parcelaDeducao;

if (salarioBruto <= 1903.98){
    impostoDeRenda = 0;
    parcelaDeducao = 'R$ 0,00';
} else if (salarioBruto >= 1903.98 && salarioBruto <= 2826.65) {
    impostoDeRenda = contaPorcentagem * 7,5;
    parcelaDeducao = 'R$ 142,80';
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    impostoDeRenda = contaPorcentagem * 15;
    parcelaDeducao = 'R$ 354,80';
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    impostoDeRenda = contaPorcentagem * 22,5;
    parcelaDeducao = 'R$ 636,13';
} else {
    impostoDeRenda = contaPorcentagem * 27,5;
    parcelaDeducao = 'R$ 869,36'
}


let salarioLiquido = salarioBruto - descontoInss - impostoDeRenda;

console.log('receberá R$ ' + salarioLiquido + ' de salário e deverá pagar ' + parcelaDeducao + ' de parcela do imposto de renda.')