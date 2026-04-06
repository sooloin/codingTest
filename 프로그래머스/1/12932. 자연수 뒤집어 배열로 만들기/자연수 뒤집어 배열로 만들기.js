function solution(n) {
    var answer = String(n).split("").reverse();
    answer = answer.map((el) => Number(el))
    return answer;
}