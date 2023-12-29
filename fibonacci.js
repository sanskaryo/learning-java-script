function fibonacciSeries(n) {
    if (n <= 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibSeries = [0, 1];
      for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      }
      return fibSeries;
    }
  }
  
  // Example usage
  const n = 10; // Replace 10 with the desired number of elements in the Fibonacci series
  console.log(fibonacciSeries(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  