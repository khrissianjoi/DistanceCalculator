const walk = require('./walk');

/**
 * Finds all paths between the start and end node given a certain limit
 *
 * @param {Object} graph - Graph object
 * @param {string} start - Starting node
 * @param {string} goal - Ending node
 * @param {number=} nStopsMax - Maximum number of stops to goal
 * @param {number=} nDistanceMax - Maximum distance of paths
 * 
 * @returns {string[][]} Array of paths
 */
function bfs_paths(graph, start, goal, nStopsMax, nDistanceMax) {
  const nGraph = { ...graph, _start: graph[start] };
  const paths = [];
  const queue = [['_start', ['_start']]];
  while (queue.length) {
    [vertex, path] = queue.shift();
    if (nStopsMax && path.length > nStopsMax) {
      break;
    }
    if (nDistanceMax) {
      const distance = walk(nGraph, path);
      if (distance > nDistanceMax) {
        continue;
      }
    }
    Object.keys(nGraph[vertex]).forEach(next => {
      queue.push([next, [...path, next]]);
      if (next === goal) {
        paths.push([...path, next]);
      } else {
      }
    });
  }
  return paths
    .filter(path => nDistanceMax ? walk(nGraph, path) < nDistanceMax : true)
      .map(path =>
        path.map(node => {
          return node === '_start' ? start : node;
        }),
      );
}

module.exports = bfs_paths;