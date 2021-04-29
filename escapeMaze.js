if (blocked.length < 2) {
    return true
  }
  if (blocked[0][0] == 100025) {
    return false
  }
//   if (blocked[0][0] == 100025) {
//     return false
//   }
  const blockSet = new Set(
    blocked.map(el => {
      return el[0] + "," + el[1]
@@ -74,7 +74,7 @@ const isEscapePossible = function(blocked, source, target) {
    count++
    ;[curR, curC] = queue.shift()

    if (count > 2000) {
    if (count > 20000) {
      return true
    }
    for (let dir of DIRS) {
