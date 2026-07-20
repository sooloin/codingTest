function solution(info, edges) {
  const children = Array.from(
    { length: info.length },
    () => []
  );

  for (const [parent, child] of edges) {
    children[parent].push(child);
  }

  let answer = 0;

  function dfs(sheep, wolf, candidates) {
    answer = Math.max(answer, sheep);

    for (let i = 0; i < candidates.length; i++) {
      const node = candidates[i];

      const nextSheep =
        sheep + (info[node] === 0 ? 1 : 0);

      const nextWolf =
        wolf + (info[node] === 1 ? 1 : 0);

      if (nextWolf >= nextSheep) {
        continue;
      }

      const nextCandidates = candidates.filter(
        (_, index) => index !== i
      );

      nextCandidates.push(...children[node]);

      dfs(nextSheep, nextWolf, nextCandidates);
    }
  }

  dfs(1, 0, [...children[0]]);

  return answer;
}