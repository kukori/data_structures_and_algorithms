const nemo = ['nemo'];

// O(n) -> linear time
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

//findNemo(nemo);

const boxes = [0,1,2,3,4,5];

// O(2) - constant time
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

//logFirstTwoBoxes(boxes); 

// O(3+(4n))
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// O(4+7n)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)
  
    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
  }

// O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// O(n+m)
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((boxes) => {
    console.log(boxes);
  });
  
  boxes2.forEach((boxes) => {
    console.log(boxes);
  });
}

const boxes2 = [1,2,3,4,5];

// O(n*n) = O(n^2)
function LogAllPairsOfArray(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      console.log(' [ ' + array[i] + ', ' + array[j] + ' ]\n' );
    }
  }
}

// LogAllPairsOfArray(boxes2);

// O(n + n^2) = O(n^2)
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

// printAllNumbersThenAllPairSums([1,2,3,4,5]);

//#5 Space complexity O(1) (the i variable)
function boooo(n) {
  for (let i = 0; i < n; i++) {
      console.log('booooo');
  }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}

// arrayOfHiNTimes(6)

// Given 2 arrays, create a function that let's a user know (true/false) weather these two arrays contain any common items
// For exampele:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'c'];
// should return true.

// O(a*b) time complexity
// O(1) space complexity
function containsCommonItem(array1, array2) {
  for(let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(a+b) time complexity
// O(a) space complexity
function containsCommonItem2(array1, array2) {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    if(!map[item]) {
      map[item] = true;
    }
  }

  for (let j = 0; j < array2.length; j++) {
    const item = array2[j];
    if(map[item]) {
      console.log(item);
      return true;
    }
  }
  return false;
}

function containsCommonItem3(array1, array2) {
  return array1.some(item => array2.includes(item));
}


// console.log(containsCommonItem3(array1, array2));

// Naive
function hasPairWithSum(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] === sum)
            return true;
     }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

// hasPairWithSum2([6,4,3,2,1,7], 9)