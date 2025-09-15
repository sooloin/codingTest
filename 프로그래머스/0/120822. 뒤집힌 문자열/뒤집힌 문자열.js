function solution(my_string) {
    let reverseString = '';
    
    for (let i = my_string.length - 1; i >= 0; i--) {
        let sliceWord = my_string.charAt(i);
        reverseString += sliceWord;
    }
    return reverseString;
}