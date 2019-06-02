const bfs_paths = require('../../bfs_paths.js');

describe('bfs paths tests', () =>{
  it.each([
    {
      graph: {
        A: { B: 5, D: 5, E: 7 },
        B: { C: 4 },
        C: { D: 8, E: 2 },
        D: { C: 8, E: 6 },
        E: { B: 3 } 
      },
      start: 'C',
      end: 'C',
      nStopsMax: 3,
      out_number: 2,
      out_paths: [["C", "D", "C"], ["C", "E", "B", "C"]]
    },
    {
      graph: {
        x: { y: 9 },
        z: { w: 4 },
        w: { x: 3, y: 1 },
        y: {}
      },
      start: 'x',
      end: 'y',
      nStopsMax: 2,
      out_number: 1,
      out_paths: [["x", "y"]]
    }
  ])('correct output for %o', (testData) => {
    const got = bfs_paths(testData.graph, testData.start, testData.end, testData.nStopsMax);
    
    expect(got.length).toEqual(testData.out_number);
    expect(got).toEqual(testData.out_paths);
  });
  it.each([
    {
      graph: {
        A: { B: 5, D: 5, E: 7 },
        B: { C: 4 },
        C: { D: 8, E: 2 },
        D: { C: 8, E: 6 },
        E: { B: 3 } 
      },
      start: 'C',
      end: 'C',
      distance: 30,
      trips: [['C','D','C'], ['C','E','B','C'], ['C','E','B','C','D','C'], ['C','D','C','E','B','C'], ['C','D','E','B','C'], ['C','E','B','C','E','B','C'],['C','E','B','C','E','B','C','E','B','C']],
    }
  ])('correct output for %o', (testData) => {
    const got = bfs_paths(testData.graph, testData.start, testData.end, null, testData.distance);
    
    expect(got).toEqual(expect.arrayContaining(testData.trips));
  });
});