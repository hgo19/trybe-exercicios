//////////////// Parte I

/// Exercicio 1

const testeScopo = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

console.log(testeScopo(true));

/// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderOdds = (array) => {
  const sortArray = array.sort((a, b) => a - b);
  return sortArray;
}
console.log(`Os números ${orderOdds(oddsAndEvens)} se econtram ordenados de forma crescente!`);

//////////////// Parte 2

/// Exercicio 1

const fatorial = n => n > 1 ? n * fatorial(n - 1) : 1;
console.log(fatorial(5));

/// Exercicio 2

const biggerWord = (frase) => {
  const splitString = frase.split(' ');
  let result = splitString[0];
    for (let i = 0; i < splitString.length; i += 1) {
      splitString[i].length > result.length ? result = splitString[i] : result;
    }

  return result;
}

console.log(biggerWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/// Exercicio 3

