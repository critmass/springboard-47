function merge(arr1, arr2) {
    let i = 0
    let j = 0

    const newArr = []

    while( i < arr1.length && j < arr2.length ) {
        if( arr1[i] < arr2[j] ) {
            newArr.push(arr1[i])
            i++
        }
        else {
            newArr.push(arr2[j])
            j++
        }
    }
    while( i < arr1.length ) {
        newArr.push(arr1[i])
        i++
    }
    while( j < arr2.length ) {
        newArr.push(arr2[j])
        j++
    }
    return newArr
}

function mergeSort(arr) {
    if( arr.length > 1 ) {
        const left  = arr.slice(0,Math.floor(arr.length/2))
        const right = arr.slice(  Math.floor(arr.length/2))
        return merge( mergeSort(left), mergeSort(right) )
    }
    else return arr
}

module.exports = { merge, mergeSort };