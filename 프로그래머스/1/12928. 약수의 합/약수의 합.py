# 약수를 구하면, 반드시 그 짝이 되는 수가 존재
# 나머지가 0이 되게 하는 수와 그 몫이 주인공이겠죠?
# 대신 중복되는 수도 생각해야 함 ex) 4x4
def solution(n):
    total = 0
    
    for num in range (1, int(n**(0.5)+1)):
        if n % num == 0:
            total += (num)
            if ((num) != (n // num)):       
                total += (n // num)
                
    return total