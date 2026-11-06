def solution(n):
    s = str(n)
    total = 0
    
    for char in s:
        total += int(char)
        
    return total