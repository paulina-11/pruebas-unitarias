import { multiplicacion } from '../js/multiplicacion'

// ./esta en la misma carpeta ../otra carpeta

test('adds 2 * 2 to equal 4', () => {
  expect(multiplicacion(2, 2)).toBe(4);
});