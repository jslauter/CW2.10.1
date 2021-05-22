let gcd=(a,b)=>b?gcd(b, a%b):a;

 function canIMeasure(a,b,c) {
  return (c <= b && c %gcd(a,b) == 0);
}
