def solution(s):
    answer=[]
    for num in s:
        answer.append(num)
    
    answer.sort(reverse=True)
    answer = "".join(answer)
    return answer