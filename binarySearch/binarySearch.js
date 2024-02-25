const binarySearch = (arr,target) => {
    let right = arr.length-1;
    let left = 0;
    while (left <= right){
        let mid = Math.floor((left+right)/2)
        let guess = arr[mid]
        if(guess===target){
            return mid
        }else if(guess < target){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return null;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],3))