/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

//SOLUTION

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote : string, magazine : string) {
    for (const l of magazine) {
        if (ransomNote.includes(l)) {
            ransomNote = ransomNote.replace(l, "")
        }
    }
    return ransomNote.length == 0 ? true : false;
};

//PASS
