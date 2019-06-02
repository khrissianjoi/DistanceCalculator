const argParse = require('../../../helpers/argParse.js');

describe('argParse helper tests', () => {
  it.each([
    {
      in: 'node distancecalculator.js --graph="AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7" --path=A-C --type="numberOfTrips=4"',
      out: {
        graph: {
          A: { B: 5, D: 5, E: 7 },
          B: { C: 4 },
          C: { D: 8, E: 2 },
          D: { C: 8, E: 6 },
          E: { B: 3 },
        },
        path: ['A','C'],
        type: {
          typeString: 'numberOfTrips=4',
          sign: '=',
          num: 4
        }
      }
    },
    {
      in: 'node distancecalculator.js --graph="xy9, zw4, wx3, wy1" --path=B-B --type="totalDistance"',
      out: {
        graph: {
          x: { y: 9 },
          z: { w: 4 },
          w: { x: 3, y: 1 },
          y: {}
        },
        path: ['B','B'],
        type:{
          typeString: 'totalDistance',
          sign: undefined,
          num: undefined
        }
      }
    }
  ])('correct output for %o', (testData) => {
    const got = argParse(testData.in);
    
    expect(got).toEqual(testData.out);
  });

  // it('throws error for incorrect distance', () => {
  //   const graph = '34fds, 35fa, 46, pdas';
    
  //   let error;
  //   try {
  //     parseGraphString(graph);``
  //   } catch (e) {
  //     error = true;
  //   }

  //   expect(error).toBe(true);
  // });
}); 
