/**
 * Turns string representation of a graph into a javascript object
 *
 * @param {string} graphString
 * 
 * @returns {Object}
 */
function parseGraphString(graphString) {
  const locations = graphString.split(',');
  const nodes = {};
  locations.forEach(location => {
    location = location.trim();

    const parent = location[0];
    const child = location[1];
    const distance = parseInt(location.substring(2), 10);
    if (!distance) {
      throw new Error(
        `Distance '${location.substring(2)}' at '${location}' is invalid`
      );
    }
    if(!(child in nodes))
    {
      nodes[child] = {}
    }
    if (parent in nodes) {
      const children = nodes[parent];
      children[child] = distance;
      nodes[parent] = children;
    } else {
      const children = {};
      children[child] = distance;
      nodes[parent] = children;
    }
  });
  return nodes;
}

module.exports = parseGraphString;