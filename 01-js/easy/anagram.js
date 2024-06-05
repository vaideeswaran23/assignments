/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let s of str1.toLowerCase()) {
    if (map1.has(s)) map1.set(s, map1.get(s) + 1);
    else map1.set(s, 1);
  }
  console.log(map1);
  for (let s of str2.toLowerCase()) {
    if (map2.has(s)) map2.set(s, map2.get(s) + 1);
    else map2.set(s, 1);
  }
  console.log(map2);
  for (let [key, value] of map1) {
    if (map2.has(key)) {
      if (map2.get(key) === value) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let s1 = str1.replace(/\s/g, "").toLowerCase();
  let s2 = str2.replace(/\s/g, "").toLowerCase();

  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  return s1 === s2;
}

function isAnagram3(str1, str2) {
  if(str1.length !== str2.length) return false;

  let s1 = str1.replace(/\s/g, '').toLowerCase();
  let s2 = str2.replace(/\s/g, '').toLowerCase();
  
  let counter = {};
  for(let s of s1) {
    if(counter[s]) {
      counter[s] = counter[s] + 1;
    } else {
      counter[s] = 1;
    }
  }

  for(let s of s2) {
    if(!counter[s]) return false;
    counter[s] -= 1;
  }
  return true;


}

let s1 = "hello";
let s2 = "hello!";
console.log(isAnagram(s1, s2));

module.exports = isAnagram;
