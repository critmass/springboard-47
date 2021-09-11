const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr){

    let left=0
    let right=arr.length-1

    if(arr[left] === arr[right]) return 1

    const pp = arr[left]

    while( left < right ) {
        if (
            arr[left] >= pp &&
            arr[right] < pp){
                swap(arr, left, right)
            }
            if(arr[left]<pp) left++
            if(arr[right]>=pp) right--
    }
    while(arr[left]<pp && left < arr.length)left++
    if(arr[left]===pp) swap(arr, left, arr.length-1)
    return left
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if(arr.length<=1)return arr
    else if (arr.length===2) {
        if (arr[0] > arr[1]) swap(arr, 0, 1)
        return arr
    }
    let index = pivot(arr)
    const left = quickSort(arr.slice(0,index))
    const right = quickSort(arr.slice(index))

    return [...left,...right]
}

module.exports = {pivot, quickSort}