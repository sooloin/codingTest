function solution(n) {
    
    function getGCD (a, b) {
        let r = a % b;
        
        if (r!==0) {
            return getGCD(b, r);
        } else {
            return b;
        }
    }
    
    const GCD = getGCD(6, n)
    
    
    return n/GCD;
}
