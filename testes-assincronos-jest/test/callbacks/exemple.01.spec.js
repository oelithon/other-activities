// Exemplo onde se espera um erro:
// Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
// Nesse caso é preciso tembém envolver a asserção com um try/catch, dessa forma, caso ela falhe, chamamos a callback done dentro do bloco catch.

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});
