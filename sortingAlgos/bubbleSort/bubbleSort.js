// Bubble Sort
//
// Walk through the list and compare neighbors.
//
// If the left one is bigger, swap them.
//
// After each full pass, the biggest item moves to the end (it “bubbles up”).
//
// Stop early if a pass has no swaps (already sorted).
//
// Speed: ~O(n²). Memory: O(1). Stable: Yes. In-place: Yes.


const bubbleSort = (arr) => {
    let noSwaps;
    for(let i = arr.length; i > 0 ; i--){
        noSwaps = true
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([2,15,3,1,8,6]))