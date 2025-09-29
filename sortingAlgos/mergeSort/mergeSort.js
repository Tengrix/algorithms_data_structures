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


const mergeTest = (arr1, arr2) => {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

console.log(mergeTest([1, 3, 5, 8], [2, 4, 6]))
// arr.concat(arr1.slice(i)).concat(arr2.slice(j)) alternative return