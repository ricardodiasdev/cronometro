import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import cronometro from "./src/assets/cronometro.png";
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={cronometro} />
      <Text style={styles.numbers}>0.0</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>CLEAR</Text>
        </TouchableOpacity>
      </View>
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
  image:{

  },
  numbers:{
    marginTop: -160,
    color:'#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection: "row",
    marginTop: 70, 
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "#00aeef",
  },
});
