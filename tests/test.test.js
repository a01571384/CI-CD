const { sumar } = require('../src/math');


test('Suma correcta', () => {
  expect(sumar(2, 3)).toBe(5);
});
