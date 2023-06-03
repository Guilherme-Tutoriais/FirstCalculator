const doCalculation = (op: string, total: number, current: number) => {
  let t = total;
  switch (op) {
    case "+":
      t += current;
      break;
    case "-":
      t -= current;
      break;
    case "*":
      t *= current;
      break;
    case "/":
      t /= current;
      break;
    default:
      t = current;
  }
  console.log("t: ", t);
  return t;
};
export default doCalculation;
