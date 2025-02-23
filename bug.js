function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of the edge case
  }
  if (a === 0 || b === 0) {
    return 1; // Incorrect handling: Should be infinity or throw an error
  }

  return a / b; // Normal case
}