0       // Write a function that converts an object into an array of keys and values.

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
// testing function
function assertEquals(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed') 
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual)
  }
}
// var actualObj = objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// });
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
  var maxScore = 0;
  // check through the elements of the array
  for (var i = 0; i < arr.length; i++) {
    // add the score to the score variable
    maxScore += arr[i].score;
  }
  // return score variable
  return maxScore;
}



// actualScore = maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]) 

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
    return false;
  }
}

// canNest([1, 2, 3, 4], [0, 6]) //➞ true

// canNest([3, 1], [4, 0]) //➞ true

// canNest([9, 9, 8], [8, 9]) //➞ false

// canNest([1, 2, 3, 4], [2, 3]) //➞ false

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

/*
Create a function that takes in an array of numbers and returns the sum of its cubes.
*/

function sumOfCubes(arr) {
  // create a result variable to hold the sum of cubes
  var cubed = 0;
  // check through the length of the array
  for (var i = 0; i < arr.length; i++) {
    // change the current element to the cubed and add to result
    arr[i] = arr[i] **3;
    cubed += arr[i];
  }
  // return result variable
  return cubed;
}


// sumOfCubes([1, 5, 9]) //➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) //➞ 216

// sumOfCubes([2]) //➞ 8

// sumOfCubes([]) //➞ 0


// assertEquals(sumOfCubes([3, 4, 5], 855, 'Should return cubed sum of all the numbers in the array'));

////////////////////////////////////////////////////////////////////////////////

//A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

function factorChain(arr) {
}

// factorChain([1, 2, 4, 8, 16, 32]) //➞ true

// factorChain([1, 1, 1, 1, 1, 1]) //➞ true

// factorChain([2, 4, 6, 7, 12]) //➞ false

// factorChain([10, 1]) //➞ false\


///////////////////////////////////////////////////

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

function mapping(arr) {
  // create a result obj;
  var result = {};
  // check through the elements of the input array
  for (var i = 0; i < arr.length; i++) {
    // add lowercase element as key and uppercase element as value to obj;
    var lower = arr[i].toLowerCase();
    var upper = arr[i].toUpperCase();
    result[lower] = upper;
  }
  // return the result obj;
  return result;
}

// assertEquals(mapping(["p", "s"]), { "p": "P", "s": "S" }, 'Should return an object with the property as a lowercase element from the input arr and the value as the same character but uppercase')

// assertEquals(mapping(["a", "b", "c"]), { "a": "A", "b": "B", "c": "C" }, 'Should return an object with the property as a lowercase element from the input arr and the value as the same character but uppercase')

// assertEquals(mapping(["a", "v", "y", "z"]), { "a": "A", "v": "V", "y": "Y", "z": "Z" }, 'Should return an object with the property as a lowercase element from the input arr and the value as the same character but uppercase')

/////////////////////////////////////////////////////////////////////////////////////////

/*
Create a function that takes three parameters where:

x is the start of the range (inclusive).
y is the end of the range (inclusive).
n is the divisor to be checked against.
Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.
*/

function arrayOperation(x, y, n) {
  // created an array to push the range of x and y
  var divided = [];
  // checked through the range of x & y and added them to the divided array
  for (var i = x; i <= y; i++) {
    if (i % n === 0) {
      divided.push(i);
    }
  }
  return divided;
}


// arrayOperation(1, 10, 3) //➞ [3, 6, 9]

// arrayOperation(7, 9, 2) //➞ [8]

// arrayOperation(15, 20, 7) //➞ []

////////////////////////////


/*
Write a function that takes a credit card number and only 
displays the last four characters. The rest of the card 
number must be replaced by ************.
*/

function cardHide(str) {
  var asterisks = ''
  for (var i = 0; i < str.length - 4; i++) {
    asterisks += '*'
  }
  var newStr = str.slice(str.length -4)
  return asterisks + newStr;
}


// cardHide("1234123456785678") //➞ "************5678"

// cardHide("8754456321113213") //➞ "************3213"

// cardHide("35123413355523") //➞ "**********5523"

//////////////////////////////////////////////////////////

/*
Snail Race
Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
Round 2: [m, s] Use his middle snail against Steve's slowest.
Round 3: [f, m] Use his fastest snail against Steve's middle.
Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

The function inputs:

Array 1: [s, m, f] for Maurice.
Array 2: [s, m, f] for Steve.
*/

function mauriceWins(arr1, arr2) {
  // create a score for steve and maurice
  var steveScore = 0;
  var mauriceScore = 0;
  if (arr1[0] > arr2[arr2.length -1]) {
    mauriceScore++
  } else {
    steveScore++
  }
  if (arr1[1] > arr2[0]) {
    mauriceScore++
  } else {
    steveScore++
  }
  if (arr1[arr1.length -1] > arr2[1]) {
    mauriceScore++
  } else {
    steveScore++
  }
  return (mauriceScore > steveScore);
}

// mauriceWins([3, 5, 10], [4, 7, 11]) //➞ true
// // Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

// mauriceWins([6, 8, 9], [7, 12, 14]) //➞ false
// Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

// mauriceWins([1, 8, 20], [2, 9, 100]) //➞ true

//////////////////////////////////////////////////////////////////////////////////

// Create a function to count the number of 1s in a 2D array.

function countOnes(arr) {
  // console.log(arr)
  // create a counter variable 
  var counter = 0
  // check through the length of the array
  for (var i = 0; i < arr.length; i++) {
  //    check through each individual array
    // console.log(arr[i])
    for (var j = 0; j < arr[i].length; j++) {
  //      if 1 is found 
            // add 1 to counter variable
      // console.log(arr[i][j])
      var current = arr[i][j];
      if (current === 1) {
        counter++
      }
    }
  }
  // return counter variable
  return counter;
}

// countOnes([
//   [1, 0],
//   [0, 0]
// ]) //➞ 1

// countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) //➞ 7

// countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ]) //➞ 2

///////////////////////////////////////////////////////////////

// Create a function that takes a string and returns a new string with all vowels removed.

// function removeVowels(str) {
//   // create a collection of vowels;
//   var vowels = 'aeiou'
//   // convert the input string to an array
//   var noVowels = [];
//   // check through the array's elements
//   for (var i = 0; i < vowels.length; i++) {
//     console.log(vowels[i])
//     for (var j = 0;  j < str.length; j++) {
//     }
//   }
//   // return the array in a string format
//   return noVowels;
// }

// removeVowels("I have never seen a thin person drinking Diet Coke.")
// //➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// //➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// //➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

/* An isogram is a word that has no duplicate letters. 
Create a function that takes a string and returns either true 
or false depending on whether or not it's an "isogram". 
*/

function isIsogram(str) {
  str = str.toLowerCase();
  var isTrue = true;
  // check each letter against the next letter of the string
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      // console.log(str[j])
      if (str[i] === str[j]) {
        return !isTrue;
      }
    }
  }
    // if it matches
      // return isTrue is false
  // return isTrue otherwise
  return isTrue;
}
// isIsogram("Algorism") //➞ true

// isIsogram("PasSword") //➞ false
// // Not case sensitive.

// isIsogram("Consecutive") //➞ false


// assertEquals(isIsogram("PasSword"), false, 'Should return true because characters are not repeated')
// assertEquals(isIsogram("Algorism"), true, 'Should return false because characters are repeated')
// assertEquals(isIsogram("Consecutive"), false, 'Should return false because characters are repeated')

////////////////////////////////////////////////////////////////////////////////

/* 
Create a function that returns the frequency distribution of an array. 
This function should return an object, where the keys are the unique elements 
and the values are the frequency in which those elements occur.
*/

function getFrequencies(arr) {
  // create a result object to contain each char as key & the # it occurs as the values
  var frequency = {};
  // check through the input arrays elements
  for (var i = 0; i < arr.length; i++) {
    // if the element is not found as a key in result
    if (frequency[arr[i]] === undefined) {
      // add it as the key and set its value to 1
      frequency[arr[i]] = 1;
    } else {
    // if it is found,
      frequency[arr[i]]++
      // increment the value by 1.
    }
  }
  // return result object
  return frequency;
}


// getFrequencies(["A", "B", "A", "A", "A"]) //➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) //➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) //➞ { true: 2, false: 3 }

// getFrequencies([]) //➞ {}

// assertEquals(getFrequencies(["A", "B", "A", "A", "A"]), { A: 4, B: 1 }, 'Should return an object with the number of times an element occurs')

///////////////////////////////////////////////////////////

// Given a string of numbers separated by a comma and space, return the product of the numbers.

function multiplyNums(str) {
  str = str.split(', ');
  console.log(str);
  var product = 1;
  for (var i = 0 ; i < str.length; i++) {
    product *= Number(str[i])
  }
  return product;
}

// multiplyNums("2, 3") //➞ 6

// multiplyNums("1, 2, 3, 4") //➞ 24

// multiplyNums("54, 75, 453, 0")// ➞ 0

// multiplyNums("10, -2") //➞ -20


/////////////////////////////////////////////////////////

/*
Given a word, create an object that stores the indexes of each letter in an array.

Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.
*/

function mapLetters(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    if (result[str[i]] === undefined) {
      result[str[i]] = [i]
    } else {
      result[str[i]].push(i)
    }
  }
  return result;
}

// mapLetters("dodo") //➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") //➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") //➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

//////////////////////////////////////////////////////////////



// Create a function that takes a string and censors words over four characters with *.

function censor(str) {
  // create a result string to add characters to 
  var censoredString = '';
  // split the words by the space 
  var words = str.split(' ');
  // check over the strings words 
  for (var i = 0; i < words.length; i++) {
    // create a variable to hold asterisks
    var asterisks = '';
    // if the length of the word is greater than 4
    if (words[i].length > 4) {
      // find the length of the word
      for (var j = 0; j < words[i].length; j++) {
        // add '*' to the variable to the length of the word
        asterisks += '*'
      }
      // replace the word with the asterisks variable
      words.splice(i, 1, asterisks) 
    }
    console.log(words)
    // if the index of the word is the last index
    if (i === words.length - 1) {
      // add each word in succession to the result string
      censoredString += words[i];
    } else {
    // otherwise, 
      // add each word with a space
      censoredString += words[i] + ' ';
    }
  }
  // return the result string
  return censoredString;
}

// censor("The code is fourty") //➞ "The code is ******"

// censor("Two plus three is five") //➞ "Two plus ***** is five"

// censor("aaaa aaaaa 1234 12345") //➞ "aaaa ***** 1234 *****"

/*
Create a function that takes a string and 
replaces the vowels with another character.

a = 1
e = 2
i = 3
o = 4
u = 5
*/

function replaceVowel(str) {
  // create an object with properties and keys that represent the change
  var obj = {
    a: 1, 
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  // split the input string into an array of characters
  var word = str.split('');
  // console.log(word)
  // check through the elements of the array
  for (var i = 0; i < word.length; i++) {
    // if the current element matches the key in the obj
    if (obj[word[i]]) {
      // change the current element to the value of the key in the obj
      word[i] = obj[word[i]];
    }
  }
  // return the array in string format
  return word.join('');
}

// replaceVowel("karachi") //➞ "k1r1ch3"

// replaceVowel("chembur") //➞ "ch2mb5r"

// replaceVowel("khandbari") //➞ "kh1ndb1r3"\

//////////////////////////////////////////////////////////////////////
/* 
Create a function that takes an array of 
students and returns an array of their top notes. 
If the student does not have notes then let's assume their top note is equal to 0.
*/

function getStudentTopNotes(arr) {
  var topNotes = [];
  // console.log(topNotes)
  for (var i = 0; i < arr.length; i++) {
    var highestNote = arr[i].notes[0];
    for (var j = 0; j < arr[i].notes.length; j++) {
      // console.log(arr[i].notes[j])  
      var currentNote = arr[i].notes[j];
      if (currentNote > highestNote) {
        highestNote = currentNote
      }
    }
    topNotes.push(highestNote)
  }
  return topNotes;
}

// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3]
//   }
// ]) //➞ [5, 5, 4]

////////////////////////////////////////////////////////////////////////////

/*
The "Reverser" takes a string as input 
and returns that string in reverse order, with the opposite case.
*/

function reverse(str) {
  var reversedStr = '';
  for (var i = str.length -1; i >= 0; i--) {
    if (str[i] === str[i].toLowerCase()) {
      reversedStr += str[i].toUpperCase();
    } else {
      reversedStr += str[i].toLowerCase();
    }
  }
  return reversedStr;
}



// reverse("Hello World") //➞ "DLROw OLLEh"

// reverse("ReVeRsE") //➞ "eSrEvEr"

// reverse("Radar") //➞ "RADAr"

/////////////////////////////////////////////////////////////////////////

/*
An array is special if every even index contains an even number and 
every odd index contains an odd number. 
Create a function that returns true if an array is special, and false otherwise.
*/

function isSpecialArray(arr) {
  var isSpecial = true;
  for (var i = 0; i < arr.length; i += 2) {
    // console.log(arr[i])
    if (arr[i] % 2 !== 0) {
      return !isSpecial;
    }
    for (var j = 1; j < arr.length; j += 2) {
    // console.log(arr[j])
      if (arr[j] % 2 !== 1) {
        return !isSpecial;
      }
    }
  }
  return isSpecial;
}


// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) //➞ true
//Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) //➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) //➞ false
// Index 3 has an even number 8.





