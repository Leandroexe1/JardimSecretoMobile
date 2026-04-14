import React from "react";
import { View, Image, Text } from "react-native";

export default function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6C63FF",
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
        }}
      >
        onde a natureza revela seus pequenos segredos
      </Text>
    </View>
  );
}