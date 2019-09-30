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

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

