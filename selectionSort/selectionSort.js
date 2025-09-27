// const selectionSort = (arr) =>{
//     for (let i = 0; i < arr.length; i++){
//         let minIndex = i;
//         for(let k = i+1; k < arr.length; k++){
//             if(arr[k] < arr[minIndex]){
//                 minIndex = k
//             }
//         }
//         if(minIndex!==i){
//             let temp = arr[i];
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }


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