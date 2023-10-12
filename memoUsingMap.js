function fib(n) {
  if (n < 3) return 1;
  const memo = new Map();

  if (memo.has(n)) return memo.get(n);

  let result = fib(n - 1) + fib(n - 2);
  memo.set(n, result);
  return result;
}
console.log(fib(6));
