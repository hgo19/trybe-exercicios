let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/// Exercicio 1

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

/// Exercicio 2

let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

console.log('Soma dos numeros', result);

/// Exercicio 3

let numbersAverage = result / numbers.length;

console.log('Média dos numeros', numbersAverage);

/// Exercicio 4

if (numbersAverage > 20) {
    console.log('Valor maior que 20.')
} else {
    console.log('Valor menos ou igual a 20.')
}

/// Exercicio 5

let highNumber = numbers[0]
for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > highNumber) {
        highNumber = numbers[index];
    }
}

console.log('Maior numero', highNumber)

/// Exercicio 6

let howManyOdd = 0;

for (let index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 > 0) {
        howManyOdd += 1;
    }
}

if (howManyOdd > 0) {
    console.log('Quantidade de numeros impar', howManyOdd);
} else {
    console.log('Nenhum valor impar encontrado.')
}

/// Exercicio 7

let lowestNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (lowestNumber > numbers[index]){
        lowestNumber = numbers[index];
    }
}

console.log('Menor numero', lowestNumber)

/// Exercicio 8

let numbersBetween = [];

for (let index = 1; index <= 25; index += 1){
    numbersBetween.push(index);
}

console.log(numbersBetween);

/// Exercicio 9

let numbersDivide = []
for (let index = 0; index < numbersBetween.length; index++){
    let operation = numbersBetween[index] / 2;
    numbersDivide.push(operation)
}

console.log(numbersDivide);

/// Exercicio Bônus

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

console.log(array);