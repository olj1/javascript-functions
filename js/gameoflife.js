function seed(a,b,c) {
  let newArray = [arguments[0],arguments[1],arguments[2]];
  return console.log(newArray);
}

function same([x, y], [j, k]) {
  if (!arguments[0] || !arguments[1]) return;
  let result;
  let array1 = arguments[0];
  let array2 = arguments[1];
  array1.forEach((e1,i)=>array2.forEach(e2=>{  
    if(e1.length > 1 && e2.length){
       result = compare(e1,e2);
    }else if(e1 !== e2 ){
       result = false
    }else{
       result = true
    }
})
)
return result;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {}

const printCell = (cell, state) => {};

const corners = (state = []) => {};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;

  seed(1,2,3);
  // console.log("same function: ", same([1,3],[1,2]))