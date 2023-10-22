function sumFibs(num) {
  let [f0, f1, f2] = [0, 1, 1];

  // Generate triples until num is reached
  let sum = 0;
  while (f1 <= num) {
    // Update sum
    sum += f1;
    if (f2 <= num) sum += f2;

    // Compute next three Fibonacci numbers
    [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
    f2 = f0 + f1;
  }
  console.log(sum);
  return sum;
}

sumFibs(1000);