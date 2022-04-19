function bfs(graph, start, visited) {
  // queue 로 사용할 배열 생성 및 시작점 추가
  let queue = [start];
  // 처음 시작점 바로 방문처리
  visited[start] = true;
  // 큐가 빌때까지 반복하기 위해서 length가 0보다 클 때
  while (queue.length > 0) {
    // queue가 true면 을 사용하지 않은 이유는 빈 배열이 자바스크립트에서는 트루
    v = queue.shift(); // 반복할때 마다 노드를 빼줌
    console.log("end = ", v); // 노드 출력

    for (const i of graph[v]) {
      // 노드와 인접한 요소들 반복문
      if (!visited[i]) {
        // 인점한 요소가 방문처리 되지 않은 요소라면
        queue.push(i); // 큐에 넣어주고
        visited[i] = true; // 방문처리
      }
    }
  } // 다시 while 문으로 돌아가서 queue가 빌 때까지 반복
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = [];

bfs(graph, 1, visited);
