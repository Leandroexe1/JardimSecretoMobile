import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.bemVindo}>
        Olá, visitante!
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#D9E2D5",
    justifyContent: "center",
    alignItems: "center",
  },

  bemVindo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A5D23",
    marginBottom: 30,
  },

  botao: {
    backgroundColor: "#4A5D23",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});