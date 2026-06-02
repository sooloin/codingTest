function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 각 칸의 방문 여부를 저장하는 2차원 배열
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // 상, 하, 좌, 우 이동 방향
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // Queue 역할을 할 배열
  const queue = [];
  let head = 0;

  // 시작 위치는 (0, 0), 시작 칸도 지나간 칸에 포함되므로 거리는 1
  queue.push([0, 0, 1]);
  visited[0][0] = true;

  // Queue가 빌 때까지 반복
  while (head < queue.length) {
    // Queue에서 현재 위치 꺼내기
    const [x, y, distance] = queue[head++];

    // 현재 위치가 도착 지점이라면 최단거리 반환
    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    // 현재 위치에서 상하좌우 4방향 확인
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵 범위를 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      // 이미 방문한 칸이면 무시
      if (visited[nx][ny]) {
        continue;
      }

      // 벽이라서 이동할 수 없는 칸이면 무시
      if (maps[nx][ny] === 0) {
        continue;
      }

      // 이동 가능한 칸이면 방문 처리 후 Queue에 넣기
      visited[nx][ny] = true;
      queue.push([nx, ny, distance + 1]);
    }
  }

  // BFS가 끝날 때까지 도착하지 못했다면 도달 불가능
  return -1;
}