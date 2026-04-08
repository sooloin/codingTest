function solution(array) {
    let freqMap = new Map();
    var answer = 0;
    
    // 1. 배열을 순회하며 요소 확인
    array.forEach((el) => {
        let cnt = 1;
        // 2. 요소 적어두고, 빈도수 카운트
        if (freqMap.has(el)) {
            freqMap.set(el, freqMap.get(el) + 1);
        } else {
            freqMap.set(el, cnt);
        }
        
    });
    
    let maxCnt = 0;
    let isDuplicate = false;
    
    for (let [key, cnt] of freqMap) {
        
        if (cnt > maxCnt) {
            maxCnt = cnt;
            answer = key;
            isDuplicate = false;
        } else if (cnt == maxCnt) {
            isDuplicate = true;
        }
    }
    
    return isDuplicate ? -1 : answer;
}