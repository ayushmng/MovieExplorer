import { StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <RootLayout />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import { Platform, StatusBar, StyleSheet } from "react-native";
// import AppNavigator from "./src/navigation/AppNavigator";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default function App() {
//   return (
//     <SafeAreaProvider style={styles.providerStyles}>
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   providerStyles: {
//     paddingTop: Platform.OS === "android" ? StatusBar?.currentHeight : 0,
//   },
// });
