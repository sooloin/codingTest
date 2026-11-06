def solution(a, b):
    arr = [a, b]
    arr.sort()
    total = 0
    
    if a == b: return a

    for num in range(arr[0], arr[1]+1):
        total += num
        
    return total