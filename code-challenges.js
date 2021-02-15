// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

//Pseudocode
//create a function
//argument will be a number in a variable
//inside function use ifelse clauses to determine if the number is >/</= to 212
//depending on the outcome output string says whether it is >/</= to 212
//console.log(function(number)); to test result

var temp1 = 85
var temp2 = 350
var temp3 = 212

const boilPoint = (temp) => {
  if(temp < 212){
    return `${temp} is below boiling point`
  }else if(temp > 212){
    return `${temp} is above boiling point`
  }else if(temp = 212){
    return `${temp} is at boiling point`
  }
}
console.log(boilPoint(temp1));
console.log(boilPoint(temp2));
console.log(boilPoint(temp3));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

//Pseudocode
//create a function
//argument of function will be an array
//inside function use for loop to cycle through every element in the array multiplying by 5
//every cycle through loop will multiply the number at the index that is equivalent to the cycle number
//for loop will cycle to the length of the array entered
//return array with the new numbers
//console.log(function(array)); to test

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

const multFive = (array) => {
  let numStorage =[]
  for(let i = 0; i < array.length; i++){
    numStorage.push(array[i]*5)
  }
  return numStorage
}
console.log(multFive(myForNumbers1));
console.log(multFive(myForNumbers2));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

//Pseudocode
//create a function
//argument is an array
//use .map to mutiply every number in array by 5
//no for loop needed due to functionality of .map
//.map cycles through every element in the array
//console.log(function(array)); to test

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

const mapMultFive = (array) => {
  return  array.map(value => {
    return value * 5
  })
}
console.log(mapMultFive(myMapNumbers1));
console.log(mapMultFive(myMapNumbers2));


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//Pseudocode
//create a function
//argument will be a string in a variable
//break up letters into an array using .split
//using newly split array, use .filter to sort out vowels
//.filter will return an array, so use .join to turn array into a string
//return new string
//console.log(function(string)); to test

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const vowelRem = (string) => {
  let stringLetters = string.split("")
  return stringLetters.filter(letter => {
    return letter !== "a" && letter !== "A" && letter !== "e" && letter !== "E" && letter !== "i" && letter !== "I" && letter !== "o" && letter !== "O" && letter !== "u" && letter !== "U"
  }).join("")
}
console.log(vowelRem(stringWithVowels1));
console.log(vowelRem(stringWithVowels2));


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

//Pseudocode
//create a function
//argument will be a variable
//use if else to check if input is string or otherwise
//if something other than string return string saying input is not a string
//if string is input then complete following procedure to remove vowels
//break up letters into an array using .split
//using newly split array, use .filter to sort out vowels
//.filter will return an array, so use .join to turn array into a string
//return new string
//console.log(function(variable)); to test


var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const vowelRem2 = (input) => {
  if(typeof input === "string"){
    let stringLetters = input.split("")
    return stringLetters.filter(letter => {
      return letter !== "a" && letter !== "A" && letter !== "e" && letter !== "E" && letter !== "i" && letter !== "I" && letter !== "o" && letter !== "O" && letter !== "u" && letter !== "U"
    }).join("")}
  else{
    return `${input} is not a string`
  }
}
console.log(vowelRem2(refactorTester1));
console.log(vowelRem2(refactorTester2));
console.log(vowelRem2(refactorTester3));



// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"
//
//Pseudocode
//create a function
//argument will be an array
//use .map and .length to create new array with lengths of strings inside as numbers
//extract first element from new array
//compare length to previous record length
//if larger record index and length of long word
//if smaller ignore
//repeat cycle until all elements have been compared
//return the recorded biggest index
//console.log(function(array)); to test
//
 var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
 var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

const bigString = (array) => {
  var bigNumIndex = 0
  var bigNum = 0
  var arrayIndex = array.map( value => {
    return value.length
  })
  for(i = 0; i < array.length; i++){
    if(arrayIndex[i] > bigNum){
      bigNum = arrayIndex[i]
      bigNumIndex = i;
    }
  }
  return array[bigNumIndex]
}

console.log(bigString(utensils));
console.log(bigString(vessels));


// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

//Pseudocode
//Create a function
//argument will be an array of strings
//start loop
//extract first element
//break element (using .split) into an array of characters
//remove last character element from array using .pop
//recombine character array into a single string using .join
//add string to new array using .push
//loop recycles
//end loop after array.length cycles
//return new array with shortened strings
//console.log(function(array)); to test

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

const lostLetter = (array) => {
  let splitChar = []
  let connectedChar = []
  for(i = 0; i < array.length; i++){
    splitChar = array[i].split("")
    splitChar.pop()
    connectedChar.push(splitChar.join(""))
  } return connectedChar
}

console.log(lostLetter(mario));
console.log(lostLetter(pacman));
