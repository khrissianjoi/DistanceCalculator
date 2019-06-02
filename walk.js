/**
 * Recursively walks the graph along given nodes path
 *
 * @param {Object} graph - Graph object
 * @param {string[]} nodes - Path to walk. eg. ['A', 'B', 'C']
 * 
 * @returns {number} Total distance 
 */
function walk(graph, nodes) {
  if (nodes.length === 1) {
    return 0;
  }
  const neighbours = graph[nodes[0]];
  return neighbours[nodes[1]] + walk(graph, nodes.slice(1));
}

module.exports = walk;