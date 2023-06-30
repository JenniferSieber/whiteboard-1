// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reduce((revString, char) => char + revString, '');
  
}
console.log(reverseString('hello'));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let reverse = str.split('').reverse().join('');
  return reverse === str;
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('madam'));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
}
console.log(reverseInt(521));
console.log(reverseInt(-521));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}
console.log(capitalizeLetters('i love javascript'));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
  let string = str.toLowerCase().split('');

  string.forEach(char => charMap[char] ? charMap[char]++ : charMap[char] = 1);

  for(let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}
console.log(maxCharacter('javascript'))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz')
    }
    else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    }
    else {
      console.log(i)
    }
  }
}
fizzBuzz()
