def solution(x, n):
    arr = []
    num = x
    for i in range(n):
        arr.append(num)
        num += x
    return arr