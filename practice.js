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
