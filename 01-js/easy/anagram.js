/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

if(str1.length!=str2.length){
  console.log("The given words are not anagrams!");
} else {
  var count = 0;
  for(i=0;i<str1.length;i++){
    for(j=0;j<str2.length;j++){
      if(str1[i]==str2[j]){
        count=count+1;
      }
    }
  }
  count == str1.length ? console.log("The given words are anagrams") : console.log("The given words are not anagrams");
}
}

module.exports = isAnagram;

isAnagram("care","race");
