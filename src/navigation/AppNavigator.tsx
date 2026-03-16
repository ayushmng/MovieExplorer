import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import MainScreen from "../screens/MainScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import SearchScreen from "../screens/SearchScreen";
import { StatusBar, View } from "react-native";
import { useTheme } from "../themes";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { colors, theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
