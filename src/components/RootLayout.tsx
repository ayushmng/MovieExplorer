import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
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

      <SafeAreaView
        style={[styles.safeAreaView, { backgroundColor: colors.background }]}
      >
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: "white" },
});
