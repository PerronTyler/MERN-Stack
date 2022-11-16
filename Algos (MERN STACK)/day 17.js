/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10j3a15";

const expected1 = "a199b70c42j3";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
    const occurrences = {}
    let index = 0
    let result = ""

    while (index < str.length) {
        let currentLetter = str[index++]
        let currentCount = ""

        while (!isNaN(str[index])) {
            currentCount += str[index++]
        }

        occurrences[currentLetter]
            ? (occurrences[currentLetter] += parseInt(currentCount))
            : (occurrences[currentLetter] = parseInt(currentCount))
    }

    Object.keys(occurrences)
        .sort()
        .forEach((letter) => (result += letter + occurrences[letter]))

    return result
}




/*****************************************************************************/