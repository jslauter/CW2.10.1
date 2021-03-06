function stringy(size) {
  var str = '';
  
  for (var i = 1; i <= size; i++) {
  // loop by starting with 1 until you get to size number
    str = str + i%2  
  // if 1 is less than or equal to size, string = str + 1 % 2, which is 1  
  // if 2 is less than or equal to size, string = str + 1 % 2, which is 0  
  }
  return str;
}
