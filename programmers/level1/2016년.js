function solution(a, b) {
    var answer = '';
    const calendar = {
        '1': 31,
        '2': 29,
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
        '12': 31
    }
    
    let days = 0
    for (const [key, value] of Object.entries(calendar)) {
        if (Number(key) < a) {
            days += Number(value)
        }
    }
    
    days += b
    
    const dayOfWeek = {
        '0': 'FRI',
        '1': 'SAT',
        '2': 'SUN',
        '3': 'MON',
        '4': 'TUE',
        '5': 'WED',
        '6': 'THU'
    }
    
    if(days % 7 === 0) {
        answer = dayOfWeek['6']
    } else {
        answer = dayOfWeek[(days % 7 - 1).toString()]   
    }
    
    return answer;
}
