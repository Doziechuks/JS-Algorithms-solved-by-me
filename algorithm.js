// Grasshopper - Debug sayHello

function sayHello(name) {
  return 'Hello, ' + name;
}

let answer = sayHello('Mr. Spock');
console.log(answer);


//testing the endswith method

function solution(str, ending) {
  // TODO: complete

  if (str.endsWith(ending)) {

    return true;
  } else {
    return false;
  }

}

let answer1 = solution('abc', 'bcbc');
console.log(answer1);


// new array test

function squareOrSquareRoot(array) {
  let processed = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    if (Math.sqrt(number) === Math.floor(Math.sqrt(number))) {
      processed.push(Math.sqrt(number));
    }
    else {
      processed.push(number * number);
    }

  }
  return processed;
}

let answer2 = squareOrSquareRoot([2, 4, 6, 9, 64]);
console.log(answer2);

//   Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.




// Reverse words
function reverseWords(str) {
  // Go for it

  return str.split('').reverse('').join('').split(' ').reverse().join(' ');

}

let answer3 = reverseWords('hello Nigeria!');
console.log(answer3);

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



let Answer4 = function sayHello(name, city, state) {

  let x = new Array(name);
  let y = city;
  let z = state;
  x = name.join(' ');

  return `Hello,${x}! Welcome to ${y}, ${z}!`;

}

console.log(Answer4(['John', 'Smith'], 'Phoenix', 'Arizona'));
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


// Square(n) sum

function squareSum(numbers) {

  let processed1 = [];

  for (let i = 0; i < numbers.length; i++) {

    let result1 = numbers[i];

    processed1.push(Math.pow(result1, 2));

  }


  let processed11 = processed1;

  let numReduce = processed11.reduce((result, value) => {

    return result + value;

  });

  return numReduce;

}

let result11 = squareSum([1, 3, 2]);
console.log(result11);

// OR A SHORTER WAY

function squareSum(numbers) {

  let processed1 = 0;

  for (let i = 0; i < numbers.length; i++) {

    let result1 = numbers[i];

    processed1 += Math.pow(result1, 2);

  }

  return processed1;

}


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// CSV representation of an Array


function toCsvText(array) {
  return array.join(',');
}

let result12 = toCsvText([0, 1, 2, 3, 4], [10, 11, 12, 13, 14], [20, 21, 22, 23, 24], [30, 31, 32, 33, 34]);

console.log(result12);


// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.


// Find Maximum and Minimum Values of a List

let Min = function (list) {

  let answer = [];

  for (let i = 0; i < list.length; i++) {

    let number = list[i]
    answer.push(number);

  }

  return Math.min.apply(null, answer);
};

console.log(Min([4, 6, 2, 1, 9, 63, -134, 566]));



let Max = function (list) {

  let answer = [];

  for (let i = 0; i < list.length; i++) {

    let number = list[i]
    answer.push(number);

  }

  return Math.max.apply(null, answer);
};

console.log(Max([4, 6, 2, 1, 9, 63, -134, 566]));

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5


// Double Char

function doubleChar(str) {

  return str.replace(/./g, '$&$&');
}

let charResult = doubleChar('string');
console.log('double char, method1 = ' + charResult);

// OR

function doubleChar(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {

    res += (str[i] + str[i]);
  }

  return res;

}

let charResult1 = doubleChar('string');
console.log('double char, method2 = ' + charResult1);


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// FAKE BINARY

function fakeBin(x) {

  let ans = '';

  for (let i = 0; i < x.length; i++) {

    if (x[i] < '5') {

      ans += '0';

    } else {
      ans += '1';

    }

  }

  return ans;

}

let ansResult = fakeBin(['1', '5']);
console.log(ansResult);

// OR

function fakeBin(x) {

  let ans = [];

  for (let i = 0; i < x.length; i++) {

    if (x[i] < '5') {

      ans.push('0');

    } else {
      ans.push('1');

    }

  }

  return ans.join('');

}

let ansResult1 = fakeBin(['1', '5']);
console.log('method2 result: ' + ansResult1);


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// Exclusive "or" (xor) Logical Operator

function xor(a, b) {

  if (a === true && b !== true){
    
    return true;
    
  } else if (a !== true && b === true){
    
    return true;
    
  } else{
    
    return false;
  }
  
}


// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

/* false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

TASK
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.*/


// FORM VALIDATION USING RegExp

function validateUsr(username) {

  let res = /^[a-zA-Z0-9_]{4,16}$/;
  return res.test(username);

  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
}

let resanswer = validateUsr('kene');
console.log(resanswer);

// A simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


// STRING REPEAT

function repeatStr (n, s) {
  return s.repeat(n);

}

let repeatResult = repeatStr(5, 'hello');
console.log(repeatResult);

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// REMOVE SPACES FROM A STRING

function noSpace(x){

  return x.split(' ').join('');

}

let noResult = noSpace('hello world');
console.log(noResult);
// Simple, remove the spaces from the string, then return the resultant string.


// count odd numbers below n

function oddCount(n){
  
  return Math.floor(n/2);

}

let oddResult = oddCount(10);
console.log(oddResult);



// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!


// Expression Matter

function expressionMatter(a, b, c) {

  return Math.max(
    a + b + c,
    a * b * c,
    (a + b) * c,
    (a * b) + c,
    a * (b + c),
    a + (b * c)
  );

}

let maxResult = expressionMatter(1, 2, 3);
console.log(maxResult);
// Task

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.


// Merge two sorted arrays into one (UNSOLVED)

const num1 = [10, 1, 8, 5, 50, 2];
num1.sort(function(a, b){ return a - b; });

function mergeArrays(arr1, arr2) {

  let arr1sort = arr1;
  let arr2sort = arr2;
  let arrConcat = arr1sort.concat(arr2sort);

  let arrSort = arrConcat.sort(function(a, b){

    return a - b;
  });

  let combo = arrSort.filter((item, pos) => arrSort.indexOf(item) === pos);

  return combo; 
  

}

let merger = mergeArrays([1,3,4,5,6,6,7], [4,2,5,1,8,9,10]);
console.log(merger);

// OR

function mergeArrays(arr1, arr2) {
  let joinedArr = arr1.concat(arr2)
  joinedArr.sort((a,b) => a - b)
   return joinedArr.filter((num,index) =>{
    return num !== joinedArr[index +1]
  })
  // console.log(joinedArr)
}

// OR

function mergeArrays(arr1, arr2) {

  let joinedArr = arr1.concat(arr2)
  joinedArr.sort((a, b) => a - b)
  let filteredArr = [...new Set(joinedArr)];
  return filteredArr
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

var a=[1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];
var comb = [];
for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
        if(a[i]==b[j]){
            console.log(a[i]);
        }
    }
}


// Is the string uppercase?

String.prototype.isUpperCase = function() {

  return this.toUpperCase() === this.toString();

}


// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.







  // let combo = [];
  // for(let i = 0; i < arr1sort.length; i++){

  //   for(let j = 0; j < arr2sort.length; j++){

  //     if(arr1sort[i] === arr2sort[j]){

  //       combo.push(arr1sort[i]); 

  //     }

  //   }

  //   return combo;

    
  // }