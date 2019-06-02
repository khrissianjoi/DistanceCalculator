/**
 * Calculates the distance of the shortest path between two nodes on a graph
 * using Dijkstra's algorithm
 *
 * @param {Object} graph - Graph object
 * @param {string} start - Starting node
 * @param {string} end - Ending node
 * 
 * @returns {number} Distance of the shortest path
 */
function dijkstra(graph, start, end) {
  const nGraph = { ...graph, _start: graph[start] };
  const solutions = {};
  solutions._start = [];
  solutions._start.dist = 0;
 
  while (true) {
    let parent = null;
    let nearest = null;
    let dist = Infinity;
 
    Object.entries(solutions).forEach(([node, solution]) => {
      if (solution) {
        const ndist = solution.dist;
        const adjNodes = nGraph[node];
        Object.entries(adjNodes).forEach(([adj, distance]) => {
          if (!solutions[adj]) {
            const d = distance + ndist;
            if (d < dist) {
              parent = solution;
              nearest = adj;
              dist = d;
            }
          }
        });
      }
    });
 
    if (dist === Infinity) {
      break;
    }
 
    solutions[nearest] = parent.concat(nearest);
    solutions[nearest].dist = dist;
  }
 
  return solutions[end].dist;
}

module.exports = dijkstra;