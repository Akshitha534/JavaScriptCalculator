// Calculator Functions using Arrow Functions

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => a / b;

export const modulus = (a, b) => a % b;

// Spread Operator Example

export const addMany = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};