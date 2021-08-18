test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(5).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});

// Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
