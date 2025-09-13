function solution(num_list) {
    const reverseNum = [];
    
    for (let i = num_list.length-1; i >= 0; i--) {
        reverseNum.push(num_list[i]);
    }
    return reverseNum;
}