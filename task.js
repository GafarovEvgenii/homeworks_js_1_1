function solveEquation(a, b, c) {
  "use strict"
  let d;
  d=Math.pow(b, 2)-4*a*c;

  if (d < 0) {
    result = 0;
  } else if(d = 0){
    result = (-b/(2*a));
  } else if (d > 0) {
    let firstRoot = (Math.round((-b + Math.sqrt(d) )/(2*a), 2));
    let secondRoot = (Math.round((-b - Math.sqrt(d) )/(2*a), 2));
    result = [firstRoot, secondRoot];
  }

  console.log (result)
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
