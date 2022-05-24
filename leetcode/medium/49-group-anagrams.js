/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {}
    strs.forEach((str, idx) => {
        const current = str.split("").sort().join('')
        result[current] ? result[current].push(str) : (result[current] = [str])
    })
    
    return Object.values(result)
};
