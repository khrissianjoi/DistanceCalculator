const dijkstra = require('../../dijkstra.js');

describe('dijkstra helper tests', () =>{
  it.each([
    {
      graph: {
        A: { B: 5, D: 5, E: 7 },
        B: { C: 4 },
        C: { D: 8, E: 2 },
        D: { C: 8, E: 6 },
        E: { B: 3 } 
      },
      start: 'A',
      end: 'C',
      out: 9
    },
    {
      graph: {
        x: { y: 9 },
        z: { w: 4 },
        w: { x: 3, y: 1 },
        y: {}
      },
      start: 'z',
      end: 'x',
      out: 7
    }
  ])('correct output for %o', (testData) => {
    const got = dijkstra(testData.graph, testData.start, testData.end);
    
    expect(got).toEqual(testData.out);
  });
});