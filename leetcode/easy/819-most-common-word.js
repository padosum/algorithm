/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const wordCnt = {}
    
    paragraph.toLowerCase().replace(/[^A-Za-z]/g, ' ').split(" ").forEach(p => {
        if (wordCnt[p]) {
            wordCnt[p] = wordCnt[p] + 1
        } else {
            wordCnt[p] = 1
        }
    })
    
    let max = 0
    let result = ''
    for (const [key, value] of Object.entries(wordCnt)) {
        if (key !== '' && !banned.includes(key) && value > max) {
            max = value
            result = key
        }
    }
    return result
};
