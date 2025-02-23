function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of the edge case
  }
  if (a === 0 || b === 0) {
    throw new Error('Division by zero'); // Correct handling: Throw an error
  }

  return a / b; // Normal case
}

//Alternative solution to demonstrate the use of isFinite()
function foo2(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error('Invalid input: Infinity or NaN detected');
  }
  if (a === 0 && b === 0) {
    return 0;
  }
  if (b === 0) {
    return Infinity * Math.sign(a); // Handle the sign properly
  }
  return a / b;
}