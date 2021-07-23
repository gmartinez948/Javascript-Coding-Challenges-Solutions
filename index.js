// Write a function that converts an object into an array of keys and values.

function objectToArray(obj){
  // create a result array
  var result = [];
  // check through the properties of obj
  for (var key in obj) {
    // add each pair to the result array
    result.push([key, obj[key]]);
  }
  // return result variable
  return result;
}

// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) 
// ➞ [["D", 1], ["B", 2], ["C", 3]]

function assertEquals(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed') 
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual)
  }
}
var actualObj = objectToArray({
  D: 1,
  B: 2,
  C: 3
});
// assertEquals(actualObj, [["D", 1], ["B", 2], ["C", 3]], 'Should return an array of arrays with the key and value of obj as a pair')

//////////////////////////////////////////////////////////////////

/*
Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles. 
*/

// input: array of objects -
                            // property: tile
                            // property: score - number
// output: maximum score - number
function maximumScore(arr) {
  // create a score variable
  var score = 0;
  // check through the elements of the array
  for (var i = 0; i < arr.length; i++) {
    // add the score to the score variable
    score += arr[i].score;
  }
  // return score variable
  return score;
}



actualScore = maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]) 

// 28

function assertEquals(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed') 
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual)
  }
}

// assertEquals(actualScore, 28, 'Should return the sum of the score value');

//////////////////////////////////////////////////////////////

/*
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
*/

function canNest(arr1, arr2) {
  // create a min variable for arr1
  var arr1Min = arr1[0];
  // create a max variable for arr1
  var arr1Max = arr1[0];
  // create a max variable for arr2
  var arr2Min = arr2[0];
  // create a max variable for arr2
  var arr2Max = arr2[0];
  // check through arr1 for the min & max numbers
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr1Min) {
      arr1Min = arr1[i];
    }
    if (arr1[i] > arr1Max) {
      arr1Max = arr1[i];
    }
  }
  // check through arr2 for the min & max numbers
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] < arr2Min) {
      arr2Min = arr2[i];
    }
    if (arr2[i] > arr2Max) {
      arr2Max = arr2[i];
    }
  }
  // compare arr1 min to arr2 min
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    // if arr1 min is greater than arr2 min && arr1 max is less than arr2 max, // return true
    return true;
  } else {
    // otherwise,
      // return false; 
    return false;
  }
}

canNest([1, 2, 3, 4], [0, 6]) //➞ true

canNest([3, 1], [4, 0]) //➞ true

canNest([9, 9, 8], [8, 9]) //➞ false

canNest([1, 2, 3, 4], [2, 3]) //➞ false

function assertEquals(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed') 
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual)
  }
}

// assertEquals(canNest([1, 2, 3, 4], [0, 6]), true, 'Should return true because the first array\'s min is greater than arr2\'s min and arr1\'s max is less than arr2\'s max')

// assertEquals(canNest([3, 1], [4, 0]), true, 'Should return true because the first array\'s min is greater than arr2\'s min and arr1\'s max is less than arr2\'s max')

// assertEquals(canNest([9, 9, 8], [8, 9]), false, 'Should return false because the first array\'s min is not greater than arr2\'s min and arr1\'s max is greater than arr2\'s max')

// assertEquals(canNest([1, 2, 3, 4], [2, 3]), false, 'Should return false because the first array\'s min is not greater than arr2\'s min and arr1\'s max is greater than arr2\'s max')

////////////////////////////////////////////////////////////////////

/*
Create a function that takes a string and returns the number (count) of vowels contained within it.
*/

function countVowels(str) {
  // create an string of vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  // convert input string to an array
  var splitStr = str.split('');
  // create a counter variable 
  var counter = 0;
  // check through the elements of the input string
  for (var i = 0; i < splitStr.length; i++) {
    // if the current element matches a vowel from the array of vowels
    for (var j = 0; j < vowels.length; j++) {
      if (splitStr[i] === vowels[j]) {
        counter++
      }
    }
  }
  // return counter
  return counter;
}

function assertEquals(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed') 
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual)
  }
}

// assertEquals(countVowels("Celebration"), 5, 'Should return the amount of number of vowels in the input string')

// assertEquals(countVowels("Palm"), 1, 'Should return the amount of number of vowels in the input string')

// assertEquals(countVowels("Prediction"), 4, 'Should return the amount of number of vowels in the input string')

////////////////////////////////////////////////////////////













