// Selection Sort
//
// Look through the unsorted part to find the smallest item.
//
// Swap it with the first item of that unsorted part.
//
// Move the boundary one step right and repeat.
//
// Few swaps (at most n−1), but still many comparisons.
//
// Speed: ~O(n²). Memory: O(1). Stable: No (basic version). In-place: Yes.

const selectionSort = (arr) => {
    let minIndex;
    for(let i = 0; i < arr.length; i++){
        minIndex = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr;
}

console.log(selectionSort([2,1,4,3,6,5,8,7]))