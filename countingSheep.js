/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  // i need to count sheep based on an array of values
  // i will need a var to store the number of sheep
  // the var only increments if the current index of the array is true
  // there may be null or undefined values in the array
  // i should loop through the array and if the current index is true increment the count
  
  let count = 0;
  
  arrayOfSheep.forEach((sheep) => {
    if (sheep === true) {
      count++;
    }
  })

  
 // Another solution
  function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
