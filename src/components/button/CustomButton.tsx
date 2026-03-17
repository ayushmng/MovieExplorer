import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  textColor?: string;
  onPress?: () => void;
}

export default function CustomButton({
  text,
  backgroundColor = "#F5C518",
  containerStyle,
  textColor = "#000",
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, containerStyle]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
