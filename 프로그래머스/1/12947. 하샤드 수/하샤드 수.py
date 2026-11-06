def solution(x):
    num = str(x)
    return False if x % sum(map(int, num)) else True