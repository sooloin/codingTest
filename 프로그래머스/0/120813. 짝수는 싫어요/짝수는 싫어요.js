function solution(n) {
    let x = 1;
    const Array = [];

    while (x <= n) {
        Array.push(x);
        x+=2;
    }
    
    return Array;
}