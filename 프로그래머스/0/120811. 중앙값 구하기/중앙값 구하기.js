function solution(array) {
    const sortedArray = array.sort((a, b) => b - a);
    const midArray = Math.floor(array.length/2);
    return sortedArray[midArray];
}