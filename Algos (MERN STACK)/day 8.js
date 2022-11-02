/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences1(numsA, numsB) {
    let test = []
    let length = 0
    if (numsA.length > numsB.length) {
        length = numsA.length
    } else {
        length = numsB.length
    }
    for (i = 0; i < length; i++) {
        if (numsA[i] && !numsB.includes(numsA[i])) {
            if (!test.includes(numsA[i])) {
                test.push(numsA[i])
            }
        }
        if (numsB[i] && !numsA.includes(numsB[i])) {
            if (!test.includes(numsB[i])) {
                test.push(numsB[i])
            }
        }
    }
    return test.sort()
}



function symmetricDifferences(numsA, numsB) {
    let setA = [...new Set(numsA)]
    let setB = [...new Set(numsB)]
    let differenceA = new Set([...setA].filter((x) => !setB.includes(x)))
    let differenceB = new Set([...setB].filter((x) => !setA.includes(x)))
    return Array.from(differenceA).concat(Array.from(differenceB));
}


console.log(symmetricDifferences(setA1, setB1));
console.log(symmetricDifferences(setA2, setB2));

/*****************************************************************************/