const walk = require('../../walk');

describe('walk helper tests', () =>{
  it.each([
    {
      graph: {
        A: { B: 5, D: 5, E: 7 },
        B: { C: 4 },
        C: { D: 8, E: 2 },
        D: { C: 8, E: 6 },
        E: { B: 3 }
      },
      path: ['A','B','C'],
      out: 9
    },
    {
      graph: {
        x: { y: 9 },
        z: { w: 4 },
        w: { x: 3, y: 1 }
      },
      path: ['z','w','x','y'],
      out: 16
    }
  ])('correct output for %o', (testData) => {
    const got = walk(testData.graph, testData.path);

    expect(got).toEqual(testData.out);
  });
});