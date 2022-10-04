const backspace = (value1, setValue1) => {
  setValue1(value1.slice(0, -1));
}

const addComma = (value1, setValue1) => {
  setValue1(value1 + ".");
}

const percentage = (value1, setValue1) => {
  if (value1) {
    setValue1(value1 / 100);
  }
}

export { backspace, addComma, percentage };