def solution(arr):
    answer = []
    storage = -1
    
    for num in arr:
        if storage != num:
            answer.append(num)
            storage = num

    return answer