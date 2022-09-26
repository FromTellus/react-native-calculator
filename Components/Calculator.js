import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

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
    } else {
      setInputTwo(value1);
    }
  }

function removeLastCharacterInValue1() {
    setValue1(value1.slice(0, -1));
  }

  function calculate() {
    switch (operator) {
      case "+":
        return setResult(Number(inputOne) + Number(inputTwo));

      case "-":
        return setResult(Number(inputOne) - Number(inputTwo));
      case "*":
        return setResult(Number(inputOne) * Number(inputTwo));
      case "/":
        setResult(Number(inputOne) / Number(inputTwo));
      default:
        return "Invalid operator";
    }
  }

  useEffect(() => {
    if (inputOne && inputTwo) {
      calculate();
    }
  }, [inputTwo]);

  return (
    <>
      <View>
        <Text style={styles.value}> {result? result : value1}</Text>
      </View>
      <View>
        <View style={styles.container}>
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOperator("/");
              operations();
            }}
          >
            <Text style={styles.buttonText}>{"/"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOperator("*");
              operations();
            }}
          >
            <Text style={styles.buttonText}>{"*"}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            removeLastCharacterInValue1();
          }}
          >
            <Text style={styles.buttonText}>{"<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "7")}
          >
            <Text style={styles.buttonText}>{"7"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "8")}
          >
            <Text style={styles.buttonText}>{"8"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "9")}
          >
            <Text style={styles.buttonText}>{"9"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOperator("-");
              operations();
            }}
          >
            <Text style={styles.buttonText}>{"-"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "4")}
          >
            <Text style={styles.buttonText}>{"4"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "5")}
          >
            <Text style={styles.buttonText}>{"5"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "6")}
          >
            <Text style={styles.buttonText}>{"6"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOperator("+");
              operations();
            }}
          >
            <Text style={styles.buttonText}>{"+"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "1")}
          >
            <Text style={styles.buttonText}>{"1"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "2")}
          >
            <Text style={styles.buttonText}>{"2"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "3")}
          >
            <Text style={styles.buttonText}>{"3"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setInputTwo(value1);

              calculate();
            }}
          >
            <Text style={styles.buttonText}>{"="}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("percentage in future")}
          >
            <Text style={styles.buttonText}>{"%"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + "0")}
          >
            <Text style={styles.buttonText}>{"0"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("future")}
          >
            <Text style={styles.buttonText}>{","}</Text>
          </TouchableOpacity>
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
  value: {
    fontSize: 50,
  },
});
