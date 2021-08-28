function sortedFrequency(arr, n) {

    const left = findLeft(arr, n)
    if( left === -1 ) return -1
    const right = findRight(arr, n)

    return 1 + right - left
}

function findLeft(arr, n) {

    let left = 0
    let right = arr.length - 1

    if( arr[left] == n ) return left

    while( left < right ) {

        let mid = Math.floor((left+right)/2)

        if(
            arr[ mid ] == n &&
            arr[mid-1] != n
        ) {
            return mid
        }
        else if( left === mid || right === mid ) {
            if (arr[left] == n) return left
            else if (arr[right] == n) return right
            return -1
        }
        else if( arr[mid] >= n ) {
            right = mid
        }
        else {
            left = mid
        }
    }
}

function findRight(arr, n) {

    let left = 0
    let right = arr.length - 1

    if (arr[right] == n) return right

    while (left < right) {

        let mid = Math.floor((left + right) / 2)

        if (
            arr[  mid  ] == n &&
            arr[mid + 1] != n
        ) {
            return mid
        }
        else if (left === mid || right === mid) {
            if( arr[left]==n ) return left
            else if( arr[right]==n ) return right
            return -1
        }
        else if (arr[mid] <= n) {
            left = mid
        }
        else {
            right = mid
        }
    }
}

module.exports = sortedFrequency