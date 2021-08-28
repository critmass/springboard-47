const findRotationCount = require("./find-rotation-count")

function findRotatedIndex(arr, numberToFind) {
    const rotation = findRotationCount(arr)
    const unrotatedArray =
            arr.slice(rotation).concat(arr.slice(0,rotation))
    const unrotatedIndex = findIndex(unrotatedArray, numberToFind)
    let index = unrotatedIndex === -1 ? -1 :
                    unrotatedIndex + rotation
    index = index > arr.length ? index - arr.length : index

    return index
}

function findIndex(arr, n) {

    let left = 0
    let right = arr.length - 1

    while( left < right ) {

        let middle = Math.floor((right+left)/2)

        if( left === middle || right === middle ) {
            if( arr[left] === n ) {
                return left
            }
            else if( arr[right]  === n ) {
                return right
            }
            else {
                return -1
            }
        }
        else if( arr[middle] === n ) {
            return middle
        }
        else if( arr[middle] < n ) {
            left = middle
        }
        else if( arr[middle] > n ) {
            right = middle
        }

    }

    return -1
}

module.exports = findRotatedIndex