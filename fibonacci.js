// fibonacci.js

function fibonacciSequence(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [1];
  } else if (num === 2) {
    return [1, 1];
  }

  const sequence = [1, 1];
  for (let i = 2; i < num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

const result = fibonacciSequence(6);
console.log(result);
