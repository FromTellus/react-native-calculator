import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import procentage from "../utils/procentage";
import addComma from "../utils/addComma";
import backspace from "../utils/backspace";
import calculate from "../utils/calculate";

export default function Calculator() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState("");

  const operations = () => {
    if (!inputOne) {
      setInputOne(currentValue);
      setCurrentValue("");
    } else if (inputOne && currentValue) {
      console.log("double");
      const calculated = calculate(inputOne, currentValue, operator);
      setInputTwo(currentValue);
      setResult(calculated);
      setCurrentValue("");
    }
  };

  function handleButtonPress(value) {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      operations();
    } else if (value === "=") {
      setInputTwo(currentValue);
      const calculated = calculate(inputOne, currentValue, operator);
      setCurrentValue("");
      setResult(calculated);
    } else if (value === "%") {
      procentage(currentValue, setCurrentValue);
    } else if (value === ".") {
      addComma(currentValue, setCurrentValue);
    } else if (value === "C") {
      setCurrentValue("");
      setInputOne("");
      setInputTwo("");
      setResult("");
      setOperator("");
    } else if (value === "<") {
      backspace(currentValue, setCurrentValue);
    } else {
      if (inputOne && inputTwo && result) {
        setInputOne(result);
        setInputTwo("");
        setCurrentValue(value);
        console.log("this?");
      } else {
        setResult("");
        setCurrentValue(currentValue + value);
      }
    }
  }

  return (
    <>
      <View style={styles.preview}>
        <Text>{inputOne}</Text>
        <Text>{operator}</Text>
        <Text>{inputTwo}</Text>
      </View>
      <Text style={styles.value}> {currentValue ? currentValue : result}</Text>
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={() => handleButtonPress("C")}>
            <Text style={styles.buttonText}>{"C"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("%")}>
            <Text style={styles.buttonText}>{"%"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("*")}>
            <Text style={styles.buttonText}>{"*"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backspaceBtn}
            onPress={() => handleButtonPress("<")}>
            <Text style={styles.buttonText}>{"<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("7")}>
            <Text style={styles.buttonText}>{"7"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("8")}>
            <Text style={styles.buttonText}>{"8"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("9")}>
            <Text style={styles.buttonText}>{"9"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("-")}>
            <Text style={styles.buttonText}>{"-"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("4")}>
            <Text style={styles.buttonText}>{"4"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("5")}>
            <Text style={styles.buttonText}>{"5"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("6")}>
            <Text style={styles.buttonText}>{"6"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("+")}>
            <Text style={styles.buttonText}>{"+"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("1")}>
            <Text style={styles.buttonText}>{"1"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("2")}>
            <Text style={styles.buttonText}>{"2"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("3")}>
            <Text style={styles.buttonText}>{"3"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("/")}>
            <Text style={styles.buttonText}>{"/"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button0}
            onPress={() => handleButtonPress("0")}>
            <Text style={styles.buttonText}>{"0"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(".")}>
            <Text style={styles.buttonText}>{"."}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.calculateBtn}
            onPress={() => handleButtonPress("=")}>
            <Text style={styles.buttonText}>{"="}</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </>
  );
}
