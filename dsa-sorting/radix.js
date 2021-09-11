


function getDigit(number, place) {
    return Math.floor((number / ( 10 ** place )) % 10)
}

function digitCount(number) {
    return number.toString().length
}

function mostDigits(arr) {
    let bestDigits = 0
    for(let i = 0; i < arr.length; i++) {
        const digits = digitCount(arr[i])
        bestDigits = digits < bestDigits ? bestDigits : digits
    }
    return bestDigits
}

function radixSort(arr) {

    let array = [...arr]

    for( let place = 0; place < mostDigits(array); place++) {

        const map = new Map()

        for(let i = 0; i < 10; i++) {
            map[i] = []
        }

        for( let element of array ) {
            map[getDigit(element, place)].push(element) }

        array = map[0]

        for (let i = 1; i < 10; i++) {
            array = array.concat(map[i])
        }
    }

    return array
}

module.exports = { getDigit, digitCount, mostDigits, radixSort};