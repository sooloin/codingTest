def solution(num):
    cnt = 0
    # 주어진 수가 1인 경우에 0을 반환
    if num == 1:
        return 0

    # 500번 반복
    while cnt < 500:
        cnt += 1
        if num%2 == 0:
            num/=2
        else:
            num = num*3+1
        
        if num == 1:
            return cnt

    # 500번 이상될 때까지 1 안되면 -1 반환
    return -1