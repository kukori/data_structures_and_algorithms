const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2)
function bubbleSort(array) {
    for(let length = array.length; length > 0; length--) {
        for(let i = 0; i < length; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp
            }   
        }
    }
}

bubbleSort(numbers);
console.log(numbers);