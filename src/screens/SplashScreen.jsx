import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8daa81",
      }}
    >
     
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Jardim Secreto
      </Text>

    
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 250,
          height: 250,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

     
      <Text
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
      >
        onde a natureza revela seus pequenos segredos
      </Text>

      
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#ffffff",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            color: "#8daa81",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          acessar
        </Text>
      </TouchableOpacity>
    </View>
  );
}