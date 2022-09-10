// Grasshopper - Debug sayHello

function sayHello(name) {
  return "Hello, " + name;
}

let answer = sayHello("Mr. Spock");
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

let answer1 = solution("abc", "bcbc");
console.log(answer1);

// new array test

function squareOrSquareRoot(array) {
  let processed = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    if (Math.sqrt(number) === Math.floor(Math.sqrt(number))) {
      processed.push(Math.sqrt(number));
    } else {
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

  return str.split("").reverse("").join("").split(" ").reverse().join(" ");
}

let answer3 = reverseWords("hello Nigeria!");
console.log(answer3);

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

let Answer4 = function sayHello(name, city, state) {
  let x = new Array(name);
  let y = city;
  let z = state;
  x = name.join(" ");

  return `Hello,${x}! Welcome to ${y}, ${z}!`;
};

console.log(Answer4(["John", "Smith"], "Phoenix", "Arizona"));
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
  return array.join(",");
}

let result12 = toCsvText(
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
);

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
    let number = list[i];
    answer.push(number);
  }

  return Math.min.apply(null, answer);
};

console.log(Min([4, 6, 2, 1, 9, 63, -134, 566]));

let Max = function (list) {
  let answer = [];

  for (let i = 0; i < list.length; i++) {
    let number = list[i];
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
  return str.replace(/./g, "$&$&");
}

let charResult = doubleChar("string");
console.log("double char, method1 = " + charResult);

// OR

function doubleChar(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }

  return res;
}

let charResult1 = doubleChar("string");
console.log("double char, method2 = " + charResult1);

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// FAKE BINARY

function fakeBin(x) {
  let ans = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      ans += "0";
    } else {
      ans += "1";
    }
  }

  return ans;
}

let ansResult = fakeBin(["1", "5"]);
console.log(ansResult);

// OR

function fakeBin(x) {
  let ans = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      ans.push("0");
    } else {
      ans.push("1");
    }
  }

  return ans.join("");
}

let ansResult1 = fakeBin(["1", "5"]);
console.log("method2 result: " + ansResult1);

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  if (a === true && b !== true) {
    return true;
  } else if (a !== true && b === true) {
    return true;
  } else {
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

let resanswer = validateUsr("kene");
console.log(resanswer);

// A simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// STRING REPEAT

function repeatStr(n, s) {
  return s.repeat(n);
}

let repeatResult = repeatStr(5, "hello");
console.log(repeatResult);

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// REMOVE SPACES FROM A STRING

function noSpace(x) {
  return x.split(" ").join("");
}

let noResult = noSpace("hello world");
console.log(noResult);
// Simple, remove the spaces from the string, then return the resultant string.

// count odd numbers below n

function oddCount(n) {
  return Math.floor(n / 2);
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
    a * b + c,
    a * (b + c),
    a + b * c
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
num1.sort(function (a, b) {
  return a - b;
});

function mergeArrays(arr1, arr2) {
  let arr1sort = arr1;
  let arr2sort = arr2;
  let arrConcat = arr1sort.concat(arr2sort);

  let arrSort = arrConcat.sort(function (a, b) {
    return a - b;
  });

  let combo = arrSort.filter((item, pos) => arrSort.indexOf(item) === pos);

  return combo;
}

let merger = mergeArrays([1, 3, 4, 5, 6, 6, 7], [4, 2, 5, 1, 8, 9, 10]);
console.log(merger);

// OR

function mergeArrays(arr1, arr2) {
  let joinedArr = arr1.concat(arr2);
  joinedArr.sort((a, b) => a - b);
  return joinedArr.filter((num, index) => {
    return num !== joinedArr[index + 1];
  });
  // console.log(joinedArr)
}

// OR

function mergeArrays(arr1, arr2) {
  let joinedArr = arr1.concat(arr2);
  joinedArr.sort((a, b) => a - b);
  let filteredArr = [...new Set(joinedArr)];
  return filteredArr;
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [2, 4, 5, 7, 11, 15];
var comb = [];
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log(a[i]);
    }
  }
}

// Is the string uppercase?

String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};

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

// Power Of Two

function powersOfTwo(n) {
  let num = n.toString().split("");
  let result = [];

  for (let i = 0; i <= num; i++) {
    result.push(Math.pow(2, i));
  }

  return result;
}

let pow = powersOfTwo(2);
console.log(pow);

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//  spliting numbers into an array

function splitBulkNum1(n) {
  let num = n.toString().split("");
  let mapresult = num.map(function (number) {
    return number;
  });

  return mapresult;
}

let powerans = splitBulkNum1(44);
console.log(powerans);

function splitBulkNum2(n) {
  let num = n.toString().split("");

  let mapresults = num.map((number) => {
    return number;
  });

  return mapresults;
}

let powerans1 = splitBulkNum2(44);
console.log(powerans1);

function splitBulkNum3(n) {
  let num = n.toString().split("");

  let mapresult = num.map(Number);

  return mapresult;
}

let powerans2 = splitBulkNum3(44);
console.log(powerans2);

//reducing a number into its lower terms

function myFun(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
  }

  return result;
}

let my = myFun(2);
console.log(my);

// Replace With Alphabet Position

function alphabetPosition(text) {
  let aplphaNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let wordSplit = text.toLowerCase().split("");
  let output = [];
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] in aplphaNum === false) {
      output.push();
    } else {
      output.push(aplphaNum[wordSplit[i]]);
    }
  }
  return output.join(" ");
}

let output = alphabetPosition("John Doe");
console.log(output);

// Who likes it?
function likes(names) {
  let output = "";

  if (names.length === 0) {
    output += `no ones likes this`;
  } else if (names.length === 1) {
    output += `${names} likes this`;
  } else if (names.length === 2) {
    output += `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    output += `${names[0]}, ${names[1]} and ${names[1]} like this`;
  } else {
    output += `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`;
  }

  return output;
}

// redistribute income evenly

function redistributeWealth(wealth) {
  let output = 0;

  for (let i = 0; i < wealth.length; i++) {
    output += wealth[i];
  }

  let wealthAverage = output / wealth.length;
  let myArr = Array(wealth.length).fill(wealthAverage);
  let wealthSort = wealth.sort().join("");
  let ArrSort = myArr.sort().join("");

  if (wealthSort === ArrSort) {
    return undefined;
  } else {
    return myArr;
  }
}
console.log(redistributeWealth([1, 2, 3]));

// How many stairs will suzuki climb in 20years

function stairsIn20(s) {
  let output = 0;

  let sunday = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
  ];
  for (let a = 0; a < sunday.length; a++) {
    output += sunday[a];
  }
  let monday = [
    9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
    7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
    9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
    6099, 5828, 7217, 9387,
  ];
  for (let b = 0; b < monday.length; b++) {
    output += monday[b];
  }
  let tuesday = [
    8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
    8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
    8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
    5717, 7555, 9447, 7703,
  ];
  for (let c = 0; c < tuesday.length; c++) {
    output += tuesday[c];
  }
  let wednesday = [
    6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
    6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
    8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
    5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
    7378, 9598, 5405, 9493,
  ];
  for (let d = 0; d < wednesday.length; d++) {
    output += wednesday[d];
  }
  let thursday = [
    6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
    8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
    6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
    5360, 6638, 8012, 8701,
  ];
  for (let e = 0; e < thursday.length; e++) {
    output += thursday[e];
  }
  let friday = [
    5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
    6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
    5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
    8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
    8720, 5725, 6960, 5127,
  ];
  for (let f = 0; f < friday.length; f++) {
    output += friday[f];
  }
  let saturday = [
    5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
    8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
    7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
    9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
    7960, 9455, 5633, 9085,
  ];
  for (let g = 0; g < saturday.length; g++) {
    output += saturday[g];
  }

  return output * s;
}

// Will you make it
console.log(stairsIn20(20));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft === distanceToPump) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2));

// compare within margin
function closeCompare(a, b, margin = 0) {
  let absValue = Math.abs(a - b);
  if (margin >= absValue) {
    return 0;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
}

console.log(closeCompare(3, 5, 2));
// OR
function closeCompare1(a, b, margin = 0) {
  if (margin >= a - b && margin >= b - a) {
    return 0;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
}

console.log(closeCompare1(3, 5, 2));

// Reverse List Order
function reverseList(list) {
  return list.reverse("");
}

console.log(reverseList([7, 0, 2, 9]));

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// Finding the missing term of an AP
let findMissing = function (list) {
  let len = list.length;
  let sum = ((len + 1) * (list[0] + list[len - 1])) / 2;
  let missing = sum - list.reduce((x, y) => x + y);
  return missing;
};
console.log(findMissing([5, 9]));

// OR
function missingNum(list) {
  let diff = (list[list.length - 1] - list[0]) / list.length;
  for (i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== diff) {
      return (list[i + 1] + list[i]) / 2;
    }
  }
}

console.log(missingNum([1, 3, 7, 9]));

// Narcissistic Numbers
function isNarcissistic(n) {
  let arr = String(n).split("").map(Number);
  let arrLength = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], arrLength);
  }
  if (n === sum) {
    return true;
  } else {
    return false;
  }
}

console.log(isNarcissistic(8208));

// Moving zeros to the end
function moveZeros(arr) {
  let newArr = [];
  let zeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    }
  }
  let arrConcat = newArr.concat(zeroArr);
  return arrConcat;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// A wolf in sheep's clothing
function warnTheSheep(queue) {
  let sheepidx = queue.length - queue.indexOf("wolf") - 1;
  if (sheepidx === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return (
      "Oi! Sheep number" + sheepidx + "! You are about to be eaten by a wolf!"
    );
  }
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
  ])
);

// Next bigger number with the same digits
function nextBigger(n) {
  let Arr = String(n).split("").map(Number);
  let ArrLast = Arr[Arr.length - 1];
  let ArrSecond = Arr[Arr.length - 2];
  let ans = [];
  if (ArrLast > ArrSecond) {
    ans.push(
      Arr.splice(0, Arr.length - 2)
        .concat(Arr.reverse())
        .join("")
    );
  }

  let num = Number(ans);
  return num;
}

console.log(nextBigger(2005));

// Sum of Digits / Digital Root
function digital_root(n) {
  let arr = String(n).split("").map(Number);
  let sum = 0;
  if (arr.length === 1) {
    return n;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return digital_root(sum);
  }
}

console.log(digital_root(493193));



//linked list insertion

function SinglyLinkedListNode(data) {
  this.head = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }

  this.size++;
};

let list1 = new SinglyLinkedList();
list1.insert(1);
list1.insert(12);
list1.insert(20);
list1.insert(1);

console.log(list1);


// Palendromic

function palendromic(word) {
  let wordSplit = word.split(" ");
  let result = [];
  let longest = "";
  for (let i = 0; i < wordSplit.length; i++) {
    let splitReverse = wordSplit[i].split("").reverse().join("");
    if (splitReverse === wordSplit[i]) {
      result.push(wordSplit[i]);
    }
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j].length > longest.length) {
      longest = result[j];
    }
  }
  return longest;
}

console.log(palendromic("madam is eye of leg"));


// stacks
class Stack {
  constructor() {
    this.item = [];
  }

  add(element) {
    return this.item.push(element);
  }
  remove() {
    if (this.item.length > 0) {
      return this.item.pop();
    }
  }
  peek() {
    return this.item[0];
  }
  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }

  clear() {
    return (this.item = []);
  }
  reverse() {
    let str = this.item.join("");
    let ans = [];
    let result = "";
    for (let i = 0; i < str.length; i++) {
      ans.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
      result += ans.pop();
    }
    return result;
  }
}

let stack = new Stack();
stack.add("Access2Tech");
console.log(stack.reverse());

//Adding Arrays
function arrAdder(arr) {
  let str = "";
  for (i = 0; i < arr[0].length; i++) {
    for (j = 0; j < arr.length; j++) {
      str += arr[j][i];
    }
    str += " ";
  }
  return str.trim();
}

let Arr = arrAdder([['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']])
console.log(Arr)

//Factorial
function factorialize(num) {
  let arr = 1;
  for (let i = 1; i <= num; i++) {
    arr *= i;
  }
  return arr;
}

console.log(factorialize(5));


//Longest word in a string
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);


//Largest Numbers In Array
function largestOfFour(arr) {
  let array = [];
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(
      arr[i].sort(function (a, b) {
        return a - b;
      })
    );
  }
  for (let i = 0; i < array.length; i++) {
    max.push(arr[i][arr.length - 1]);
  }
  return max;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//Confirm the ending of a string without using the endsWith method
function confirmEnding(str, target) {
  let ans = str.slice(str.length - target.length) === target;
  return ans;
}

console.log(confirmEnding("Bastian", "n"));


//repeat string without using the string repeat method
function repeatStringNumTimes(str, num) {
  let ans = '';
  for(let i = 0; i < num; i++){
    ans += str
  }
  return ans
}
console.log(repeatStringNumTimes("abc", 3));


//Truncating a string
function truncateString(str, num) {
  let word = str.length;
  let ans = "";
  if (word > num) {
    return (ans += str.slice(0, num) + "...");
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// filtering an Array
function filteredArray(arr, elem) {
  let newArr = [];
    for(let i = 0; i < arr.length; i++){
      let ite = arr[i];
      if(ite.indexOf(elem) === -1){
        newArr.push(ite)
      }
    }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// using for...in loop in an object
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  let ans = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      ans++;
    }
  }
  return ans;
}

console.log(countOnline(users));


// square an array negelecting negative nums and non-intergers
const squareList = (arr) => {
  let ans = arr
    .filter((pos) => pos >= 0 && pos % parseInt(pos) === 0)
    .map((num) => num * num);
  return ans;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


// sort an array without changing the original Array
const globalArray = [5, 6, 3, 2, 9];
console.log(globalArray);
function nonMutatingSort(arr) {
  let newArr = [...arr];
  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}

console.log(nonMutatingSort(globalArray));