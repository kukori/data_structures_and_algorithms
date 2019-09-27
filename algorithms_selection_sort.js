const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2)
function selectionSort(array) {
    for(let i = 0; i < array.length; i++){
        let smallestItemIndex = i;
        for(let j = i; j < array.length; j++) {
            if(array[smallestItemIndex] > array[j]) {
                smallestItemIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[smallestItemIndex];
        array[smallestItemIndex] = temp;
    }
}

selectionSort(numbers);
console.log(numbers);