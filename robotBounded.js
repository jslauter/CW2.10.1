@@ -34,3 +34,26 @@ const isRobotBounded = function(instructions) {
  }
  return x === 0 && y === 0 || i > 0
};

// another

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function(instructions) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let x = 0, y = 0, i = 0
  for(let ins of instructions) {
    if(ins === 'G') {
      const dir = dirs[i]
      x += dir[0]
      y += dir[1]
    } else if(ins === 'L') {
      i = i - 1 < 0 ? 3 : i - 1 
    } else if(ins === 'R') {
      i = i + 1 > 3 ? 0 : i + 1
    }
  }
  return x === 0 && y === 0 || i !== 0
};
