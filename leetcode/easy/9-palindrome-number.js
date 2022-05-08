/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const len = x.toString().length 
    const arr = x.toString().split("")
    
    let check = true
    
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[arr.length-1-i]) {
            check = false
            break
        }
    }    
    
    return check
};

// 전달받은 숫자를 배열로 바꾸고 reverse로 뒤집은 뒤 join을 사용해 처음 파라미터와 비교해도 된다.
