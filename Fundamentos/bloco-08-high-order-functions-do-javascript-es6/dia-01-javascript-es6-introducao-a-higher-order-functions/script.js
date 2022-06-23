// Exercicio 1

const employeesObj = (name) => {
  return {
    nome: name,
    email: `${name.toLowerCase().replace(' ','_')}@trybe.com` //https://www.delftstack.com/pt/howto/javascript/javascript-remove-spaces/#utilize-replace-para-substituir-apenas-o-espa%25C3%25A7o-branco
  }
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeesObj))

// Exercicio 2

const checkRaffle = (aposta, sorteio) => aposta === sorteio;

const raffle = (aposta, callback) => {
  const sort = Math.floor(Math.random() * (5 - 1)) + 1;
  return callback(aposta, sort) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(raffle(3, checkRaffle));

// Exercicio 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checkAnswer = (rightAnswer, studentAnswer) => {
  if (studentAnswer === rightAnswer) {
    return 1;
  } else if (studentAnswer === 'N.A') {
    return 0;
  }
  return 0.5  
}

const studentGrade = (testAnswer, studentAnswer, callback) => {
  let grade = 0;
  for (let i = 0; i < testAnswer.length; i += 1) {
    const callbackReturn = (callback(testAnswer[i], studentAnswer[i]));
    grade += callbackReturn;
  }
  return `Resultado final: ${grade} pontos`;
}

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer))