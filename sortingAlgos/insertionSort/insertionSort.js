
// Идём по массиву с индекса 1.
//
// Берём текущий элемент currentVal = arr[i].
//
// Сдвигаем все элементы слева, которые больше currentVal, на одну позицию вправо (цикл while).
//
// Когда нашли место (или дошли до начала), вставляем currentVal в arr[prevIdx + 1].
//
// Повторяем для всех элементов. Сортировка происходит на месте, хорошо работает на почти отсортированных массивах.


const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let prevIdx = i - 1
        while( prevIdx >= 0 && arr[prevIdx] > currentVal){
            arr[prevIdx+1] = arr[prevIdx]
            prevIdx--
        }
        arr[prevIdx+1] = currentVal
    }
    return arr
}

console.log(insertionSort([5,6,7,4,8]))

