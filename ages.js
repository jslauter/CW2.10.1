const differenceInAges = (ages) => {
  let youngest = Math.min.apply(null, ages);
  let oldest = Math.max.apply(null, ages);
  return [youngest, oldest, oldest - youngest];
};
