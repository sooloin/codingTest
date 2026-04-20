function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]);
    let cnt = 0;
    
    while (queue.length > 0) {  
        let front = queue.shift();
        
        // 남은 큐에 더 큰 우선순위가 있으면 뒤로 보내기   
        if (queue.some((process) => process[0] > front[0])) {
            queue.push(front);
        } else {
            cnt++
            
            //실행한 프로세스의 원래 위치가 location이면 count 반환
            if (front[1] === location) {
                return cnt;
            }
        }  
        
    }
    
}