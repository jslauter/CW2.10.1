@@ -19,15 +19,15 @@ const gardenNoAdj = function(N, paths) {
    let colors = new Array(4).fill(false);
    for (let neighbor of map[i]) {
      if (result[neighbor] !== -1) {
        colors[result[neighbor] - 1] = true;
        colors[result[neighbor]] = true;
      }
    }
    for (let j = 0; j < colors.length; j++) {
      if (!colors[j]) {
        result[i] = j + 1;
        result[i] = j;
        break;
      }
    }
  }
  return result;
  return result.map(i => ++i);
};
