/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  j.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(Str1, Str2) {
    const S = [...Str1]
    const T = [...Str2]
    let count = 0
    for (let i=S.length-1; i>0; i--){
        if (S[i] === '#'){
            S.splice(i,1)
            count ++
        } else if (S[i] !== '#'){
            if (count > 0) {
                S.splice(i,1)
                count --
            }
        }
    }

    count = 0
    for (let j=T.length-1; j>0; j--){
        if (T[j] === '#'){
            T.splice(j,1)
            count ++
        } else if (T[j] !== '#'){
            if (count > 0) {
                T.splice(j,1)
                count --
            }
        }
    }
    
    if (S.join('') == T.join('')) {
        return true
    }
    return false
}

console.log(backspaceStringCompare(S1, T1));

/*****************************************************************************/