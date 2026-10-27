# 변환할 수 없다면.. 새로 추가를 해 볼까?

def solution(s):
    answer = []
    index = 0
    
    for char in s:
        if char == ' ':
            index = 1
            
        if index % 2 == 0:
            answer.append(char.upper())
        else:
            answer.append(char.lower())
        index+=1
    
    return "".join(answer)