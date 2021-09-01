/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if( i >= nums.length ) return 1
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if( i >= words.length ) return 0
  const longestOfTheRest = longest(words, i+1)
  return words[i].length > longestOfTheRest ?
                                words[i].length :
                                longestOfTheRest
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if( i>=str.length ) return ""
  return str[i].concat( everyOther(str, i + 2) )
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if( str.length <= 1 ) return true
  return str[0] === str[str.length-1] ?
                      isPalindrome(str.slice(1, str.length-1)) :
                      false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {

  if( i >= arr.length ) return -1
  return arr[i] === val ? i : findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if( !str.length ) return ""
  return str[str.length-1].concat(
                            revString(str.slice(0,str.length-1)))
}

/** gatherStrings: given an object, return an array of
 *  all of the string values. */

function gatherStrings(obj) {
  const arr = []
  for( let key in obj ) {
    const entry = obj[key]
    if(typeof entry === "string") {
      arr.push(entry)
    }
    else if(typeof entry === "object") {
      arr.push(gatherStrings(obj[key]))
    }
  }
  return arr.flat()
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  if( arr.length <= 2 ) {
    let i = 0
    while( i < arr.length ) {
      if( arr[i] === val ) return i
      i++
    }
    return -1
  }

  const mid = Math.floor(arr.length/2)

  if( arr[mid] === val ) {
    return mid
  }
  else if( arr[mid] < val) {
    const indexPastMid = binarySearch(arr.slice(mid), val)
    return indexPastMid === -1 ? -1 : mid + indexPastMid
  }
  else {
    return binarySearch(arr.slice(0, mid), val)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
