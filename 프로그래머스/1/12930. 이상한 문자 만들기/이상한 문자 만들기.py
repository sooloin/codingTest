# 변환할 수 없다면.. 새로 추가를 해 볼까?

def solution(s):
    answer = []
    index = 0
    
    for char in s:
        index+=1
        
        if char == ' ':
            index = 0
            
        if index % 2 == 1:
            answer.append(char.upper())
        else:
            answer.append(char.lower())
            
    
    return "".join(answer)