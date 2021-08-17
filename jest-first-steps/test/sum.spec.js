const { sum } = require('../src/sum');

test('Soma de dois valores', () => {
  expect(sum(2, 3)).toEqual(5);
});
