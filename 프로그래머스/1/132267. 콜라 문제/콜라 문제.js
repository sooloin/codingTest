function solution(a, b, n) {
    // a = 줘야 하는 병
    // b = 새 병
    // n = 내가 갖고 있는 빈 병
    
    // n < a이면 추가적으로 빈병 찾기 불가
    // a개를 주면 b만큼 준다.
    return getCoke(a, b, n);
}

function getCoke(a, b, n) {
    
    if (n < a) {
        return 0;
    }
    
    let received = Math.floor(n / a) * b;
    let remainder = (n % a);
    
    return received + getCoke(a, b, received + remainder)
}