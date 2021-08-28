function countZeroes(arrayOfZeros) {

    if( arrayOfZeros.length === 0 ) return 0
    if( arrayOfZeros.length - 1 ) {

        const midPoint = arrayOfZeros.length%2 ?
                            Math.floor(arrayOfZeros.length/2) :
                            arrayOfZeros.length/2 - 1

        if( arrayOfZeros[midPoint] ) {
            if( arrayOfZeros.length - 2 ) {
                return countZeroes(arrayOfZeros.slice(midPoint+1))
            }
            else {
                return Number(!arrayOfZeros[1])
            }
        }
        else {
            return midPoint + 1 + countZeroes(arrayOfZeros.slice(0, midPoint))
        }
    }
    else {
        return Number(!arrayOfZeros[0])
    }
}

module.exports = countZeroes