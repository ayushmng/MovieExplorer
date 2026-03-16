import React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../themes";
import AppNavigator from "../navigation/AppNavigator";

export default function RootLayout() {
  const { colors, theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </View>
  );
}
