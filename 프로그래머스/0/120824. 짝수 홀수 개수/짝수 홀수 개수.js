function solution(num_list) {
    const oddOrEven = [];
    let oddCnt = 0;
    let evenCnt = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        num_list[i]%2 ? oddCnt++ : evenCnt++;
    }
    oddOrEven.push(evenCnt, oddCnt)
    
    return oddOrEven;
}