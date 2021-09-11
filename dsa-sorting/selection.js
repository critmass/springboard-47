function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let smallestIndex = i
        for(let j = i; j < arr.length; j++) {
            if( arr[j] < arr[smallestIndex] ) {
                smallestIndex = j
            }
        }
        [arr[i],arr[smallestIndex]] = [arr[smallestIndex],arr[i]]
    }
    return arr
}

module.exports = selectionSort;