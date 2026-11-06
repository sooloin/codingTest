def solution(n):
    x = n**(0.5)
    print(x)
    return (x+1)**2 if x.is_integer() else -1