// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 3, 4, 6, 9, 15];

const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [3, 4, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) { 
    const expected = []
    for (i=0; i<arr.length; i++){
        if(cb(arr[i])){
            expected.push(arr[i])
        }
    }
    return expected
}
// console.log(dropIt(nums1, callback1));
// console.log(dropIt(nums2, callback2));
// console.log(dropIt(nums3, callback3));
/*****************************************************************************/
// [11: 13 AM]
/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a palindrome?
*/

const str1 = "";
// const expected1 = false;

const str2 = "a";
// const expected2 = true;

const str3 = "ddaa";
// const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    if(str.length == 0) {
        return false;
    }

    let count = {};
    let oddCount = 0;
    
    for(let i = 0; i < str.length; i++) {
        !count.hasOwnProperty(str[i]) ? count[str[i]] = 1 : count[str[i]]++;
    }

    Object.values(count).forEach(value => {
        if(value % 2 == 1) {
            oddCount++;
        }
    })
    return oddCount > 1 ? false : true;
}
// console.log(canStringBecomePalindrome(str1));
// console.log(canStringBecomePalindrome(str2));
// console.log(canStringBecomePalindrome(str3));
// console.log(canStringBecomePalindrome(str4));
// console.log(canStringBecomePalindrome(str5));
// console.log(canStringBecomePalindrome(str6));
// /*****************************************************************************/