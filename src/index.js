module.exports = function solveEquation(equation) {
  // your implementation
  var str = [], result = [],arrNumber = [];
  var a, b, c, D, x1, x2;
  str = equation.split(' ');

  for(var i = 0; i < str.length; i++){
      if(/-/.test(str[i]) && /[0-9]/.test(str[i+1])){
          arrNumber.push(str[i+1] * -1);
      } else if(+str[i] < 0){
          arrNumber.push(+str[i]);
      } else if((+str[i] > 0) && (/-/.test(str[i - 1]) === false)){
          arrNumber.push(str[i]);
      }
  }

   a = arrNumber[0];
   b = arrNumber[1];
   c = arrNumber[2];

   D = b*b - 4*a*c;

   x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
   x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));

  result.push(x1,x2);

  result.sort(function(a,b){
      return a - b;
  });

  return result;
}
