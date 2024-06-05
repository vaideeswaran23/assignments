/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.replace(/[^a-zA-z0-9]/g, "").toLowerCase();
  let c1 = 0;
  let c2 = s.length - 1;
  while (c1 <= c2) {
    if (s[c1] !== s[c2]) return false;
    c1++;
    c2--;
  }
  return true;
}

let str = "Able, was I ere I saw Elba!";

console.log(isPalindrome(str));

module.exports = isPalindrome;
