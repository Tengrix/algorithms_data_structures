// const quickSort = (arr) => {
//     if(arr.length <= 1 ) return arr
//     let mid = Math.floor(arr.length/2)
//     let less = arr.filter(el=> el < arr[mid])
//     let greater = arr.filter(el=> el > arr[mid])
//     let equal = arr.filter(el=> el === arr[mid])
//     return [...quickSort(less),...equal,...quickSort(greater)]
// }

const quickSort = (arr, left=0, right = arr.length-1) => {
    if(left < right){
        let idx = pivotHandler(arr, left, right);
        quickSort(arr, left, idx-1)
        quickSort(arr, idx+1, right)
    }

    return arr
}

const pivotHandler = (arr, start=0, end=arr.length-1) => {
    let pivot = arr[start]
    let currPivIdx = start
    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            currPivIdx++
            let temp = arr[i]
            arr[i] = arr[currPivIdx]
            arr[currPivIdx] = temp
        }
    }
    let temp = arr[currPivIdx]
    arr[currPivIdx] = arr[start]
    arr[start] = temp
    return currPivIdx
}


console.log(quickSort([2,1,4,3,6,5,8,7]))