function findFloor(arr, n) {

    let left = 0
    let right = arr.length - 1

    if( arr[0] > n ) return -1

    while( left < right ) {

        let middle = Math.floor((left+right)/2)

        if( arr[right] < n ) {
            return arr[right]
        }
        else {
            right--
        }
        if( arr[middle] < n ) {
            left = middle
        }
        else {
            right = middle - 1
        }
    }
    return arr[right]
}

module.exports = findFloor