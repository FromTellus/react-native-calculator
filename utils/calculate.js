export default function calculate(inputOne, inputTwo, operator) {
  switch (operator) {
    case "+":
      return Number(inputOne) + Number(inputTwo);
    case "-":
      return Number(inputOne) - Number(inputTwo);
    case "*":
      return Number(inputOne) * Number(inputTwo);
    case "/":
        if (inputTwo === "0") {
            return "Error";
        } else {
        return Number(inputOne) / Number(inputTwo);
        }
    default:
      return "Hello";
  }
}
