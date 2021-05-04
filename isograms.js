/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case */

function isIsogram(str){
  //given a string return true if the string does not have repeating letters
  // else if it does return false
  // the case of the letters does not matter
  // first loop over str
  // inside loop where j = str[i + 1]
  // if i = j return false
  // else return true
  // start with str tolowercase
  // test if str is a string if not return
  
  if (typeof(str) !== "string") {
    return
  }
  
  // lowercase string to make case insensitive
  str = str.toLowerCase();
  
  // start outer loop through str
  for (let i = 0; i < str.length; i++) {
    // start inner loop
    for (let j = i + 1; j < str.length; j++) {
      // test if str[i] === str[j] if so return false
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// ========================================================= //
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str)  {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split('');
  
  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}
