function solution(my_string, n) {
    let result = '';
    
    for (let i in my_string) {
        let sliceWord = my_string.charAt(i).repeat(n);
        result += sliceWord;
    }
    
    return result;
}