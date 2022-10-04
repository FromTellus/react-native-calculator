import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import procentage from "../utils/procentage";
import addComma from "../utils/addComma";
import backspace from "../utils/backspace";
import calculate from "../utils/calculate";

export default function CalculatorInput() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [value1, setValue1] = useState("");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState("");
  const [caluclation, setCaluclation] = useState(false);

  function operations() {
    if (!inputOne) {
      setInputOne(value1);
      setValue1("");
    } else if (caluclation === true) {
        setInputOne(result);
        setValue1(result);
        setInputTwo("");
        setResult("");
        setCaluclation(false);
      } else {
        setInputTwo(value1);
        setValue1("");
      }
    }


  function handleButtonPress (value) {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      operations();
      setResult("");
    } else if (value === "=") {
      setInputTwo(value1);
      calculate(setCaluclation, inputOne, inputTwo, operator, setResult);
    } else if (value === "%") {
      procentage(value1, setValue1);
    } else if (value === ".") {
      addComma(value1, setValue1);
    } else if (value === "C") {
      setValue1("");
      setInputOne("");
      setInputTwo("");
      setResult("");
      setOperator("");
      setCaluclation(false);
    } else if (value === "<") {
      backspace(value1, setValue1);
    } else {
      if(caluclation === true) {
        setValue1(value);
        setResult("");
        setCaluclation(false);
      } else {
      setValue1(value1 + value);
    }
  }
  }
  useEffect(() => {
    calculate(setCaluclation, inputOne, inputTwo, operator, setResult);
    
  }, [inputTwo]);

  return (
    <>
      <View style={styles.preview}>
        <Text>{inputOne}</Text>
        <Text>{operator}</Text>
        <Text>{inputTwo}</Text>
      </View>
      <Text style={styles.value}> {result ? result : value1}</Text>
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={() => {
              handleButtonPress("C");
            }}
          >
            <Text style={styles.buttonText}>{"C"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("%")}>
            <Text style={styles.buttonText}>{"%"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleButtonPress("*");
              
            }}
          >
            <Text style={styles.buttonText}>{"*"}</Text>
          </TouchableOpacity>

          {
            <TouchableOpacity
              style={styles.backspaceBtn}
              onPress={() => {
                handleButtonPress("<");
              }}
            >
              <Text style={styles.buttonText}>{"<"}</Text>
            </TouchableOpacity>
          }

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleButtonPress("7");
            }}
          >
            <Text style={styles.buttonText}>{"7"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("8")}
          >
            <Text style={styles.buttonText}>{"8"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress( "9")}
          >
            <Text style={styles.buttonText}>{"9"}</Text>
          </TouchableOpacity>

          {
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleButtonPress("-");
               
              }}
            >
              <Text style={styles.buttonText}>{"-"}</Text>
            </TouchableOpacity>
          }

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("4")}
          >
            <Text style={styles.buttonText}>{"4"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("5")}
          >
            <Text style={styles.buttonText}>{"5"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("6")}
          >
            <Text style={styles.buttonText}>{"6"}</Text>
          </TouchableOpacity>

          {
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setOperator("+");
                operations();
              }}
            >
              <Text style={styles.buttonText}>{"+"}</Text>
            </TouchableOpacity>
          }

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("1")}
          >
            <Text style={styles.buttonText}>{"1"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("2")}
          >
            <Text style={styles.buttonText}>{"2"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("3")}
          >
            <Text style={styles.buttonText}>{"3"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleButtonPress("/");
              
            }}
          >
            <Text style={styles.buttonText}>{"/"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button0}
            onPress={() => handleButtonPress("0")}
          >
            <Text style={styles.buttonText}>{"0"}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              handleButtonPress(".");
            }}
            >
            <Text style={styles.buttonText}>{"."}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.calculateBtn}
            onPress={() => {
              handleButtonPress("=");
           }}
          >
            <Text style={styles.buttonText}>{"="}</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </>
  );
}
