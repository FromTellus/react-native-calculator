export default function calculate(setCaluclation, inputOne, inputTwo, operator, setResult) {
    setCaluclation(true);

    switch (operator) {
      case "+":
        return setResult(Number(inputOne) + Number(inputTwo));
      case "-":
        return setResult(Number(inputOne) - Number(inputTwo));
      case "*":
        return setResult(Number(inputOne) * Number(inputTwo));
      case "/":
        return setResult(Number(inputOne) / Number(inputTwo));
      default:
        return "Invalid operator";
    }
  }