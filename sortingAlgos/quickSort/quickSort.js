const quickSort = (arr) => {
    if(arr.length <= 1 ) return arr
    let mid = Math.floor(arr.length/2)
    let less = arr.filter(el=> el < arr[mid])
    let greater = arr.filter(el=> el > arr[mid])
    let equal = arr.filter(el=> el === arr[mid])
    return [...quickSort(less),...equal,...quickSort(greater)]
}

console.log(quickSort([2,1,4,3,6,5,8,7]))