@@ -14,3 +14,31 @@ const bitwiseComplement = function (N) {
  // flip all bits
  return bitmask ^ N
}

// another

/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function (N) {
  let X = 1;
  while (N > X) X = X * 2 + 1;
  return N ^ X;
}

// another

/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function (N) {
  if (N === 0) return 1
  // l is a length of N in binary representation
  const l = Math.floor(Math.log(N) / Math.log(2)) + 1
  // bitmask has the same length as num and contains only ones 1...1
  const bitmask = (1 << l) - 1
  // flip all bits
  return bitmask ^ N
}
