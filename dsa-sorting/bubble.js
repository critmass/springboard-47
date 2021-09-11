function bubbleSort(arr) {
    let sortedEnd = arr.length
    for(let i = 0; i < arr.length; i++) {
        let lastSorted = 0
        for(let j = 0; j < sortedEnd; j++) {
            if( arr[j] > arr[j+1] ) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                lastSorted = j
            }
        }
        if(!lastSorted) break
        else sortedEnd = lastSorted
    }
    return arr
}

module.exports = bubbleSort;