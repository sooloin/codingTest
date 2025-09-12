function solution(array) {
    let freqMap = new Map(); // 빈 맵 준비
    
    // 배열 순회
    for (let i = 0; i < array.length; i++) {
        let cnt = 1;
        if (freqMap.has(array[i])) {
            freqMap.set(array[i], freqMap.get(array[i])+1);
        } else {
            freqMap.set(array[i], cnt);
        }
    
    }
    let maxFreq = 0;
    let modeCandidate = 0;
    let tieCount = 0;
    
    // Map 순회하며 조회
    for (let [key, value] of freqMap) {
        if (value > maxFreq) { 
            maxFreq = value;
            modeCandidate = key;
            tieCount = 1;
        } else if (value == maxFreq) {
            tieCount++;
        }
        
    }
    
    return (tieCount>=2) ? -1 : modeCandidate;
    
}