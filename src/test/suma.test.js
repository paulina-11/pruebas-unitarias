import { suma } from '../js/suma'

// ./esta en la misma carpeta ../otra carpeta

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});