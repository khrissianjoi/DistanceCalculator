const yargs = require('yargs');
const parseGraphString = require('./parseGraphString');

/**
 * Parses command line arguments passed as `args` using "yargs" and outputs
 * them as an object ready for use (or null if an argument is missing)
 *
 * @param {string[]} args
 * 
 * @returns {Object}
 */
function argParse(args) {
  let { graph, path, type } = yargs.parse(args);

  if (!graph || !path || !type) {
    return null;
  }

  try {
    graph = parseGraphString(graph);
  } catch (e) {
    throw e;
  }

  path = path.split('-');

  let sign, num;
  if (type.includes('routesWithDistance') || type.includes('numberOfTrips')) {
    const matchedSign = type.match(/\w(<|=|<=)\d/);
    if (!matchedSign) {
      throw new Error(
        `A limit on '${type}' is required. Allowed operators: <, =, <=`
      );
    }
    sign = matchedSign && matchedSign[0].slice(1, -1);
    num = parseInt(type.match(/\d+$/), 10);
    if (!num) {
      throw new Error(`Invalid number in type '${type}'`);
    }
  }


  return {
    graph,
    path,
    type: {
      typeString: type,
      sign,
      num
    }
  };
}

module.exports = argParse;