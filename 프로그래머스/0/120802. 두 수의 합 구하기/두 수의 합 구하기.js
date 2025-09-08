function solution(num1, num2) {
    let intNum1 = Number.isInteger(num1);
    let intNum2 = Number.isInteger(num2);
    
    if (num1 < -50000 || num1 > 50000 
        || num2 < -50000 || num2 > 50000 || !intNum1 || !intNum2) {
        return -1;
    }
    
    var answer = -1;
    answer = num1 + num2;
    
    return answer;
};

solution(2, 3)