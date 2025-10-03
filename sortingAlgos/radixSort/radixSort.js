const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

const digitCount = (num) => {
    return Math.abs(num).toString().length;
}

const mostDigits = (arr) => {
    let max = 0
    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, digitCount(arr[i]))
    }
    return max
}

const radixSort = (arr) =>{
    let digits = mostDigits(arr);
    for(let i = 0; i < digits; i++){
        let bucket = Array.from({ length: 10 }, () => []);
        for(let k = 0; k < arr.length; k++){
            let digit = getDigit(arr[k],i)
            bucket[digit].push(arr[k])
        }
        arr = new Array().concat(...bucket)
    }
    return arr;
}


console.log(radixSort([3,15,88,9849,121,6544848,6654,1,6,82,533]))

