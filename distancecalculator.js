const walk = require('./walk');
const dijkstra = require('./dijkstra');
const bfs_paths = require('./bfs_paths');
const argParse = require('./helpers/argParse');

const fs = require('fs');

try {
  const parsed = argParse(process.argv);
  if (!parsed) {
    const readme = fs.readFileSync('README.md', 'utf8');
    console.log('Error: Missing required parameters.\n');
    console.log(readme);
    process.exit(1);
  }
  const {graph, path, type} = parsed;
  if (!graph)
  if (process.env.NODE_ENV === 'dev') {
    console.log('GRAPH = \n', graph)
    console.log('PATH = \n', path)
    console.log('TYPE = \n', type, '\n')
  }

  if (type.typeString.includes('totalDistance')) {
    const distance = walk(graph, path);
    console.log(isNaN(distance) ? 'NO SUCH PATH' : distance);

  } else if (type.typeString.includes('shortestPath')) {
    console.log(dijkstra(graph, path[0], path[1]));

  } else if (type.typeString.includes('numberOfTrips')) {
    const lst = bfs_paths(graph, path[0], path[1], type.num);
    const appropriateTrips = lst.filter(outPath =>
      eval(`outPath.length ${
        type.sign === '=' ? '===' : type.sign
        } ${type.num + 1}`)
    );
    console.log(appropriateTrips.length);
  } else if (type.typeString.includes('routesWithDistance')) {
    const lst = bfs_paths(graph, path[0], path[1], null, type.num);
    const appropriateTrips = lst.filter(outPath =>
      eval(`walk(graph, outPath) ${
        type.sign === '=' ? '===' : type.sign
        } ${type.num + 1}`)
    );
    console.log(appropriateTrips.length);
  }

} catch (e) {
  console.log(process.env.NODE_ENV === 'dev' ? e : e.message);
  process.exit(1);
}