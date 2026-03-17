import React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../themes";
import AppNavigator from "../navigation/AppNavigator";

export default function RootLayout() {
  const { colors, theme } = useTheme();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
