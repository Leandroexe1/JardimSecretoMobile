import React from "react";
import { View, Text, Image } from "react-native";

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
      <Image
        source={{
          uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBCAMBEQACEQEDEQH/..."
        }}
        style={{
          width: 180,
          height: 180,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          color: "white",
          fontSize: 18,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        onde a natureza revela seus pequenos segredos
      </Text>
    </View>
  );
}