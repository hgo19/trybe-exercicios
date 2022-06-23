const {sum, myRemove, myFizzBuzz} = require('./script');


///Exercicio 1

describe('Exercicio 1, Requisito 1', () => {
  it('A função recebe os parâmetros 4 e 5 e retorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  });

describe('Exercicio 1, Requisito 2', () => {
  it('A função recebe os parâmetros 0 e 0 e retorna 0', () => {
    expect(sum(0,0)).toBe(0);
  })
})

describe('Exercicio 1, Requisito 3', () => {
  it(`A função lança um erro quanto os parâmetros são 4 e '5'`, () => {
    expect(() => {sum(4,'5')}).toThrow();
  });
});

describe('Exercicio 1, Requisito 4', () => {
  it(`A função retorna o erro 'parameters must be numbers' quando realiza a chamada sum(4,'5')`, () => {
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
  });
});

///Exercicio 2

describe('Exercicio 2', () => {
  it('A função recebe o parâmetro e retorna o array removendo o item pedido', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

///Exercicio 3

describe('Exercicio 3', () => {
  it(`A função recebe um número e retorna 'fizzbuzz' se o número for por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número`, () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(16)).toBe(16);
    expect(myFizzBuzz('2')).toBeFalsy();
  });
});
