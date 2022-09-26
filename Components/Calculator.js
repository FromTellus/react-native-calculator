import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import addition from "../utils/addition";

export default function CalculatorInput() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [value1, setValue1] = useState("");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState("");

  function operations() {
    if (!inputOne) {
      setInputOne(value1);
      setValue1("");
      console.log(inputOne, "inputOne in operations");
    }
  }

  function calculate() {
    console.log(inputOne, "inputOne in calculate");
    console.log(inputTwo, "inputTwo in calculate");

    switch (operator) {
      case "+":
        return setResult(inputOne + inputTwo);

      case "-":
        return subtraction(inputOne, inputTwo);
      case "*":
        return multiplication(inputOne, inputTwo);
      case "/":
        return division(inputOne, inputTwo);
      default:
        return "Invalid operator";
    }
  }

  return (
    <>
      <View>
        <Text>This is your value: {value1 || result}</Text>
        <Text> this is result {result}</Text>
        <Text>Current operator: {operator}</Text>
        <Text>Current inputOne: {inputOne}</Text>
        <Text>Current inputTwo: {inputTwo}</Text>

        <View style={styles.container}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setValue1("");
                setResult("");
                setOperator("");
                setInputOne("");
                setInputTwo("");
              }}
            >
              <Text style={styles.buttonText}>{"C"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOperator("/")}
            >
              <Text style={styles.buttonText}>{"/"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOperator("*")}
            >
              <Text style={styles.buttonText}>{"*"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(Number(inputOne) / Number(inputTwo))}
            >
              <Text style={styles.buttonText}>{"<"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "7")}
            >
              <Text style={styles.buttonText}>{"7"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "8")}
            >
              <Text style={styles.buttonText}>{"8"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "9")}
            >
              <Text style={styles.buttonText}>{"9"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOperator("-")}
            >
              <Text style={styles.buttonText}>{"-"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "4")}
            >
              <Text style={styles.buttonText}>{"4"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "5")}
            >
              <Text style={styles.buttonText}>{"5"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "6")}
            >
              <Text style={styles.buttonText}>{"6"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setOperator("+");
                operations();
              }}
            >
              <Text style={styles.buttonText}>{"+"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "1")}
            >
              <Text style={styles.buttonText}>{"1"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "2")}
            >
              <Text style={styles.buttonText}>{"2"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "3")}
            >
              <Text style={styles.buttonText}>{"3"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                operations();
                calculate();
              }}
            >
              <Text style={styles.buttonText}>{"="}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("percentage in future")}
            >
              <Text style={styles.buttonText}>{"%"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue1(value1 + "0")}
            >
              <Text style={styles.buttonText}>{"0"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("future")}
            >
              <Text style={styles.buttonText}>{","}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#72d3fe",
    margin: 10,
    color: "black",
    maxWidth: 100,
    fontSize: "30",
  },
  text: {
    fontSize: "16",
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    backgroundColor: "#bbeaff",
    marginBottom: "10%",
    opacity: 0.5,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  resultBox: {
    backgroundColor: "black",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 15,
  },
});
