/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, X) {
  let satisfied = 0,
    maxMakeSatisfied = 0
  for (let i = 0, winOfMakeSatisfied = 0; i < grumpy.length; ++i) {
    if (grumpy[i] === 0) {
      satisfied += customers[i]
    } else {
      winOfMakeSatisfied += customers[i]
    }
    if (i >= X) {
      winOfMakeSatisfied -= grumpy[i - X] * customers[i - X]
    }
    maxMakeSatisfied = Math.max(winOfMakeSatisfied, maxMakeSatisfied)
  }
  return satisfied + maxMakeSatisfied
}
