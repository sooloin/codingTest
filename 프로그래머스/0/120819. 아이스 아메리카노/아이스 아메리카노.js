function solution(money) {
    const coffee = Math.floor(money / 5500);
    const smallChange = Math.floor(money % 5500);
    const result = [];
    
    result.push(coffee, smallChange)
    return result;
}