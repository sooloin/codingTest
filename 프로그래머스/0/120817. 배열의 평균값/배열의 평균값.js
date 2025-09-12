function solution(numbers) {
    const arr = numbers.reduce((acc, cur) => acc + cur, 0)
    return arr/numbers.length;
}