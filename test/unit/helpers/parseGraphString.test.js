const parseGraphString = require('../../../helpers/parseGraphString.js');

describe('parseGraphString helper tests', () => {
  it.each([
    {
      in: 'AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7',
      out: {
        A: { B: 5, D: 5, E: 7 },
        B: { C: 4 },
        C: { D: 8, E: 2 },
        D: { C: 8, E: 6 },
        E: { B: 3 }
      }
    },
    {
      in: 'xy9, zw4, wx3, wy1',
      out: {
        x: { y: 9 },
        z: { w: 4 },
        w: { x: 3, y: 1 },
        y: {}
      }
    }
  ])('correct output for %o', (testData) => {
    const got = parseGraphString(testData.in);
    
    expect(got).toEqual(testData.out);
  });

  it('throws error for incorrect distance', () => {
    const graph = '34fds, 35fa, 46, pdas';
    
    let error;
    try {
      parseGraphString(graph);
    } catch (e) {
      error = true;
    }

    expect(error).toBe(true);
  });
}); 
