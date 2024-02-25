const mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

const merge = (left,right) => {
    let res = [], leftIndex = 0, rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            res.push(left[leftIndex++])
        }else{
            res.push(right[rightIndex++])
        }
    }
    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort([2,1,4,3,6,5,8,7]))