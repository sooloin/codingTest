function solution(board, moves) {
    let answer = 0;
    let basket = [];

    for (let move of moves) {
        let col = move - 1;

        for (let row = 0; row < board.length; row++) {
            // 인형 뽑기
            if (board[row][col] !== 0) {
                let doll = board[row][col]; 
                board[row][col] = 0;    

                // 바구니 맨 위 인형과 비교
                if (basket[basket.length - 1] === doll) {
                    basket.pop();   // 같은 인형이면 제거
                    answer += 2;
                } else {
                    basket.push(doll); // 다르면 바구니에 넣기
                }

                break; // 한 번 인형 집으면 그 move는 끝
            }
        }
    }

    return answer;
}