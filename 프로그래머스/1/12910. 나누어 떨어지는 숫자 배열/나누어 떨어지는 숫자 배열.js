function solution(arr, divisor) {
    var answer = [];
    arr.forEach((el, i) => {
        if (el % divisor === 0) {
            answer.push(el);
        }
    })
    answer.sort((a, b) => a - b);
    return answer.length ? answer : [-1]
}