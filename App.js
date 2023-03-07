import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import cronometro from "./src/assets/cronometro.png";
export default function App() {
  const [numero, setNumero] = useState(0);
  const [ultimo, setUltimo] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isStop, setIsStop] = useState(true);

  const handleStartorStop = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
      setIsStop(true);
    } else {
      setTimer(
        setInterval(() => {
          setNumero((numero) => numero + 0.1);
        }, 100)
      );
      setIsStop(false);
    }
  };

  const handleReset = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
    }
    setIsStop(true);
    setUltimo(numero);
    setNumero(0);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={cronometro} />
      <Text style={styles.numbers}>{numero.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={handleStartorStop}>
          <Text style={styles.btnText}>{isStop ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleReset}>
          <Text style={styles.btnText}>CLEAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        {ultimo > 0 ? `Último intervalo de tempo: ${ultimo.toFixed(1)} segundos` : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
  numbers: {
    marginTop: -160,
    color: "#FFF",
    fontSize: 65,
    fontWeight: "bold",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  text:{
    marginTop: 40,
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  }
});
