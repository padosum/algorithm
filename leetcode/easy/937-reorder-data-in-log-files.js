/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const getBody = s => s.slice(s.indexOf(' ') + 1)
    const isNum = c => /\d/.test(c)
    
    const compare = (a, b) => {
        const n = getBody(a).localeCompare(getBody(b))
        if (n !== 0) return n
        return a.localeCompare(b)
    }
    
    const digitLogs = []
    const letterLogs = []
    for (const log of logs) {
        console.log(`getBody`, getBody(log))
        if (isNum(getBody(log))) {
            digitLogs.push(log)
        } else {
            letterLogs.push(log)
        }
    }
    return [...letterLogs.sort(compare), ...digitLogs]
};
