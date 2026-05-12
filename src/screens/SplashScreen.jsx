import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Jardim Secreto
      </Text>

      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>
        Onde a natureza revela seus pequenos segredos
      </Text>

      <TouchableOpacity
        style={styles.buttonCustom}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.buttonText}>
          Acessar
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
    padding: 20,
  },

  logo: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4A5D23",
  },

  subtitle: {
    fontSize: 15,
    color: "#4A5D23",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  buttonCustom: {
    backgroundColor: "#4A5D23",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});