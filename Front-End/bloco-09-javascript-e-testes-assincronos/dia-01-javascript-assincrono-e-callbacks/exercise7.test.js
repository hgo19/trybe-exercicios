const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testa a função uppercase', () => {
  test('Verifica se a função retorna string com letras maisculas', (done) => {
    uppercase('pikachu', (result) => {
      expect(result).toBe('PIKACHU');
      done();
    })
  })
})

