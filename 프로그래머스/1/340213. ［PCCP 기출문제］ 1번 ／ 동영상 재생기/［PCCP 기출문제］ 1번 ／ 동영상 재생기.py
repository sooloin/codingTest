def arrToTime(time):
    for i in range(2):
        time[i] = int(time[i])
    
    TotalTime = time[0]*60+time[1]
    return TotalTime

def timeToArr(time):
    mm = time//60
    ss = time%60
    answer = [str(mm).zfill(2), str(ss).zfill(2)]
    
    return answer

def prev10(cur_time):
    # cur_time에서 -10 해주면 됨
    cur_time-=10
    
    # 이전 영상 길이가 10초보다 이하면 00:00으로
    if cur_time<0:
        cur_time = 0
    
    return cur_time
    
def next10(video_time, cur_time):
    # cur_time에서 +10 해주면 됨
    cur_time+=10
    
    # 동영상 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동
    if (cur_time>video_time):
        cur_time = video_time
    
    return cur_time

    
def opening(op_s, op_e, cur_time):
    if (op_s<=cur_time<=op_e):
        cur_time=op_e
        
    return cur_time
    
def solution(video_len, pos, op_start, op_end, commands):
    
    # 비디오 총 길이
    video_time = video_len.split(':')
    video_time_int = arrToTime(video_time)
    
    # 현재 pos
    cur_time = pos.split(':')
    cur_time_int = arrToTime(cur_time)
    
    # 오프닝 s, e
    op_s = op_start.split(':')
    op_s_int = arrToTime(op_s)
    
    op_e = op_end.split(':')
    op_e_int = arrToTime(op_e)
    
    ## 먼저 오프닝 검사
    cur_time_int = opening(op_s_int, op_e_int, cur_time_int)
    
    for command in commands:
        if command == "prev":
            cur_time_int = prev10(cur_time_int)
            cur_time_int = opening(op_s_int, op_e_int, cur_time_int)
        elif command == "next":
            cur_time_int = next10(video_time_int, cur_time_int)
            cur_time_int = opening(op_s_int, op_e_int, cur_time_int)
    
    arr = timeToArr(cur_time_int)
    return ':'.join(arr)