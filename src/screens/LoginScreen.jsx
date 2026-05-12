import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Não tem conta?{" "}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Criar conta
        </Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D9E2D5", // mesmo fundo
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4A5D23", // mesmo verde
    textAlign: "center",
    marginBottom: 30,
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

  registerText: {
    marginTop: 20,
    textAlign: "center",
    color: "#4A5D23",
  },

  registerLink: {
    fontWeight: "bold",
  },

});