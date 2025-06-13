const { sumar } = require('./test');

test('Suma correcta', () => {
  expect(sumar(2, 3)).toBe(5);
});
