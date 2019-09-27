const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n log(n)) space complexity (O(n))
// Stable: https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
function mergeSort (array) {
  if (array.length === 1) {
    return array;
  }
  let left = array.splice(0, Math.floor(array.length/2));
  let right = array;
  //console.log(left, right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    const array = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array.push(left[leftIndex]);
            leftIndex++;
        } else {
            array.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));;
}


const answer = mergeSort(numbers);
console.log(answer);