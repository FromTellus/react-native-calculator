import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

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
    } else {
      if (caluclation) {
        setInputOne(result);
        setValue1("");
        setInputTwo("");
        setCaluclation(false);
        setResult("");
        console.log("how about this");
    } else {
      console.log("does this always run?");
      setInputTwo(value1);
    }
    }
  }

  function procentage() {
    if (value1) {
      setValue1(value1 / 100);
    }
  }

  function addComma() {
    if (value1.indexOf(".") === -1) {
      setValue1(value1 + ".");
    }
  }
  function backspace() {
    setValue1(value1.slice(0, -1));
  }

  function calculate() {
    setCaluclation(true);

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
    if (inputOne.length > 0 && inputTwo.length > 0) {
      calculate();
      setCaluclation(true);
    }
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
            onPress={() => procentage()}
          >
            <Text style={styles.buttonText}>{"%"}</Text>
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

          {
            <TouchableOpacity
              style={styles.backspaceBtn}
              onPress={() => {
                backspace();
              }}
            >
              <Text style={styles.buttonText}>{"<"}</Text>
            </TouchableOpacity>
          }

          <TouchableOpacity
            style={styles.button}
            onPress={() => {setValue1(value1 + "7")}}
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

          {
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setOperator("-");
                operations();
              }}
            >
              <Text style={styles.buttonText}>{"-"}</Text>
            </TouchableOpacity>
          }

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
              setOperator("/");
              operations();
            }}
          >
            <Text style={styles.buttonText}>{"/"}</Text>
          </TouchableOpacity>
         

          <TouchableOpacity
            style={styles.button0}
            onPress={() => setValue1(value1 + "0")}
          >
            <Text style={styles.buttonText}>{"0"}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={addComma}
          style={styles.button}>
            <Text style={styles.buttonText}>{"."}</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.calculateBtn}
            onPress={() => {
              setInputTwo(value1);
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

const styles = StyleSheet.create({

  preview: {
    flexDirection: "column",
    textAlign: "center",
  },
  button: {
    width: "20%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#72d3fe",
    margin: 10,
    color: "black",
    maxWidth: 100,
    fontSize: "30",
  },

  button0: {
    width: "45%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#72d3fe",
    margin: 10,
    color: "black",
    fontSize: "30",
  },


  clearBtn: {
    width: "20%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FFC000",
    margin: 10,
    color: "black",
    maxWidth: 100,
    fontSize: "30",
  },

  backspaceBtn: {
    width: "20%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FDD96A",
    margin: 10,
    color: "black",
    maxWidth: 100,
    fontSize: "30",
  },

  calculateBtn: {
    width: "20%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FFEFBF",
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
    justifyContent: "flex-start",
    width: "100%",
    
  },

  buttonText: {
    fontSize: 15,
  },
  value: {
    fontSize: 50,
    marginBottom: "15%",
  },
});
