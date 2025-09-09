function solution(numer1, denom1, numer2, denom2) {
    let a = (numer1 * denom2) + (numer2 * denom1);
    let b = denom1 * denom2;
    
    function getGCD(a, b) {
        let r = a % b;
        if (r !== 0) {
            return getGCD(b, r);
        } else {
            return b;
        }
    }
    
    const newNumer = a / getGCD(a,b);
    const newDenom = b / getGCD(a,b);
    
    return [newNumer, newDenom];
}