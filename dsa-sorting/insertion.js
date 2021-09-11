function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        const [temp] = arr.splice(i,1)
        for(let j = i; j >= 0; j--) {
            if( !j || temp > arr[j-1] ) {
                arrLeft = arr.slice(0,j).concat(temp)
                arrRight = arr.slice(j)
                arr = arrLeft.concat(arrRight)
                break
            }
        }

    }
    return arr
}

module.exports = insertionSort;