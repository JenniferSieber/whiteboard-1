// CHALLENGE 1: ADD ALL NUMBERS
//with Args 
function addAllES6() {
  let args = Array.from(arguments);
  return args.reduce((ttl, cv) => ttl + cv, 0);
}

console.log(addAllES6(2,5,6,7))

//With Rest
function addAllES6Rest(...rest) {
  return rest.reduce((ttl, cv) => ttl + cv, 0);
}

console.log(addAllES6Rest(2,5,6,7))

// CHALLENGE 2: SUM ALL PRIMES
// Brads function
// ex. sumAllPrimes(10) == 17
function sumAllPrimes(n) {
  let total = 0;
  function checkForPrimes(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 2; i <= n; i++) {
    if (checkForPrimes(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10))

// CHALLENGE 3: SEEK & DESTROY
// Brads-mine didnt take into account more than the array and 2 other parameters REST
function seekAndDestroyRest(arr, ...rest) {
  return arr.filter(value => !rest.includes(value));
}
console.log(seekAndDestroyRest([2, 3, 4, 6, 6, 'hello'], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT without moving the -1/trees--Brad's
function sortByHeight(arr) {
  let arr1 = []; 
  let arr2 = []; 

  arr.forEach((v,i) => v === -1 ? arr1.push(i) : arr2.push(v));

  const sorted = arr2.sort();
  arr1.forEach((v,i) => sorted.splice(arr1[i], 0, -1));

  return sorted;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;
  str
    .split('')
    .map((char,i) => str.charCodeAt(i) == compare ? ++ compare : missing = String.fromCharCode(compare));
  return missing;
}

console.log(missingLetters("abce"))
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"))

// CHALLENGE 6: EVEN & ODD SUMS
function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach(num => num % 2 === 0 ? evenSum += num : oddSum +=num);

  return [evenSum, oddSum];
}
console.log(evenOddSums([50, 60, 60, 45, 71]))
