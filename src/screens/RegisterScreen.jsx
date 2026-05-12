import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Crie sua conta</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" />

      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Text style={styles.label}>Confirme sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha novamente"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Já possui uma conta?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Fazer login
        </Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D9E2D5", // igual às outras telas
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4A5D23",
    textAlign: "center",
    marginBottom: 25,
  },

  label: {
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#4A5D23",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: "#4A5D23",
  },

  loginLink: {
    fontWeight: "bold",
  },

});