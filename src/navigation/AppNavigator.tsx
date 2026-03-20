import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import MainScreen from "../screens/MainScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import SearchScreen from "../screens/SearchScreen";
import { useTheme } from "../themes";
import MovieList from "../screens/MovieList";
import Favorites from "../screens/Favorites";
import { RootStackParamList } from "../types/movie";
import { Strings } from "../constants/strings";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name={Strings.route.splash} component={SplashScreen} />
        <Stack.Screen name={Strings.route.main} component={MainScreen} />
        <Stack.Screen
          name={Strings.route.movieDetails}
          component={MovieDetailsScreen}
        />
        <Stack.Screen name={Strings.route.search} component={SearchScreen} />
        <Stack.Screen name={Strings.route.movieList} component={MovieList} />
        <Stack.Screen name={Strings.route.favorites} component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
