<<<<<<< HEAD
function primeNumber(n) {
  for (let i = 2; i <= n / 2; i++) {
    // if n is divisible by i then it isn't a prime number
    if (n % i == 0) return undefined;
  }

  // if n isn't divisble by any of these numbers then n is prime
  return n;
}

function getPrimefrom100() {
  const primeNums = [];

  for (let i = 1; i <= 100; i++) {
    // check if i is prime
    const prime = primeNumber(i);

    // if i is a prime number add to the array of prime numbers
    if (prime) primeNums.push(prime);
  }

  return primeNums;
}

console.log(getPrimefrom100());
=======
function primeNumber(n) {
  for (let i = 2; i <= n / 2; i++) {
    // if n is divisible by i then it isn't a prime number
    if (n % i == 0) return undefined;
  }

  // if n isn't divisble by any of these numbers then n is prime
  return n;
}

function getPrimefrom100() {
  const primeNums = [];

  for (let i = 1; i <= 100; i++) {
    // check if i is prime
    const prime = primeNumber(i);

    // if i is a prime number add to the array of prime numbers
    if (prime) primeNums.push(prime);
  }

  return primeNums;
}

console.log(getPrimefrom100());
>>>>>>> 4d3a85e83ff76772161dba0d968f4fab04fc18ed
