// 1. symmetric difference
function sym() {
    
    const arraySummarizer = (array, temp) => {
        let localTemp = {};
        for(let i = 0; i < array.length; i++) {
            if(!temp[array[i]]) {
                temp[array[i]] = 1;
                localTemp[array[i]] = true;
            } else if(!localTemp[array[i]]) {
                temp[array[i]] += 1;
            }
        }
    };
    
    const symDiff = (array1, arraysLeft) => {
        let temp = {};
        let difference = [];
        let array2 = arraysLeft.shift();
        
        arraySummarizer(array1, temp);
        // console.log(temp);
        arraySummarizer(array2, temp);
        // console.log(temp);
        
        for(let key in temp) {
            if(temp[key] === 1) {
                difference.push(parseInt(key));
            }
        }
        //console.log('diff: ', difference);
        
        if(arraysLeft.length === 0) {
            return difference;
        }
        
        if(arraysLeft.length > 0) {
            return symDiff(difference, arraysLeft);
        }
    }
    
    let args = Array.prototype.slice.call(arguments);
    var array1 = args.shift();
    return symDiff(array1, args);
}

//console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

function updateInventory(arr1, arr2) {
    const temp = {};
    const result = [];
    for(let i = 0; i < arr1.length; i++) {
        if(!temp[arr1[i][1]]) {
            temp[arr1[i][1]] = arr1[i][0];
        } else {
            temp[arr1[i][1]] += arr1[i][0];
        }
    }

    for(let j = 0; j < arr2.length; j++) {
        if(!temp[arr2[j][1]]) {
            temp[arr2[j][1]] = arr2[j][0];
        } else {
            temp[arr2[j][1]] += arr2[j][0];
        }
    }

    const keys = Object.keys(temp);
    //insertion sort
    keys.sort();
    console.log(keys);

    for(let k = 0; k < keys.length; k++) {
        result.push([temp[keys[k]], keys[k]]);
    }
    
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//console.log(updateInventory(curInv, newInv));
//console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));



//Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
function permAlone(str) {

    const calculatePermutations = (str) => {

        if (str.length === 1){
            return [str]
        }
        
        let permutations = [];
        for (let i = 0; i < str.length; i++) {
            const currentLetter = str[i];
            const remainingLetters = str.slice(0,i) + str.slice(i+1);
            //console.log(remainingLetters);

            const permutationsOfRemaining = calculatePermutations(remainingLetters);
        
            permutationsOfRemaining.forEach(subPerm => {
                permutations.push(currentLetter + subPerm)    
            })  
        }
        
        return permutations;
    }

    let allPermutations = calculatePermutations(str);
    let regex = /(.)\1+/g;
    
    let result = allPermutations.filter(function(string) {
        return !string.match(regex);
    });
    return result.length;
}

  
//console.log(permAlone('aab'));


// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3)creates a pair [2, 1]using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.
function pairwise(array, sum) {

    const elements = {};

    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(elements[array[i]])) {
            elements[array[i]].push(i);
        } else {
            elements[array[i]] = [i];
        }
    }

    console.log(elements);
    let result = 0;

    for(let j = 0; j < array.length; j++) {
        let difference = sum - array[j];
        if (Array.isArray(elements[difference]) && elements[difference].length > 0 && Array.isArray(elements[array[j]]) && elements[array[j]].length > 0) {
            console.log('indexes: ', elements[difference] + ' - ' + j);
            console.log('elements: ', difference + ' - ' + array[j]);
            let diffIndex = elements[difference].shift();
            if(diffIndex === j) {
                diffIndex = elements[difference].shift();
            }
            if(Number.isInteger(diffIndex)) {
                result += diffIndex + j;
            }
            elements[array[j]].shift();
        }
    }
    console.log(elements);
    return result;
}
  
// console.log(pairwise([1,4,2,3,0,5], 7));
// console.log(pairwise([1, 3, 2, 4], 4));
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
// console.log(pairwise([1, 1, 1], 2));