function findRotationCount(arr) {

    let left = 0
    let right = arr.length - 1

    if( arr[left] < arr[right] ) return 0

    while( left < right ) {

        let middle = Math.floor((right+left)/2)

        if( arr[left] > arr[middle] ) {

            right = middle
        }
        else if( left === middle ) {

            if( arr[left] > arr[right] ) {

                left = right
            }
            else {

                right = -1
            }
        }
        else {

            left = middle
        }
    }
    return left
}

module.exports = findRotationCount