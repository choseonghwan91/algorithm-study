// 그래프 선언
let graph = [
  [], // 보통 노드가 1부터 시작하니까 0번 인덱스 비워서도 많이 사용함 굳이 -1로 계산 안해도 되니까
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// 방문처리 할 변수 선언
let visited = []; // 다른 언어에서는 false로 노드보다 +1 해서 초기값을 넣어줘야 되지만, 자바스크립트에서는 빈배열만 선언해주면 arr[2] => undefined 이기 때문에 빈배열만 설정

dfs(graph, 1, visited);

function dfs(graph, v, visited) {
  visited[v] = true;
  console.log("end=", v);

  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}
