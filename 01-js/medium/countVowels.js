/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let s = str.toLowerCase();
    let set = ['a' , 'e', 'i', 'o', 'u'];
    let counter = 0;
    
    for(let t of s) {
      if(set.includes(t)) counter++;
    }

    return counter;

}

module.exports = countVowels;