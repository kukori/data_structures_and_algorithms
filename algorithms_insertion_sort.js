const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// best case O(n) when nearly sorted, worst case O(n^2)
function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
        let temp = array[i];
        for(let j = 0; j < array.length; j++) {
            if(temp < array[j]) {
                array.splice(i, 1);
                array.splice(j, 0, temp);
                break;
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);