import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MyStrings } from "../constants/strings";
import { featuredMovies, moviesList } from "../constants/data";
import { MovieCarousel } from "../components/MovieCarousel";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

export default function MainScreen() {
  const navigation = useNavigation();
  const [darkTheme, setDarkTheme] = useState(true);

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/32.jpg",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.welcome}>
            {MyStrings.displayText.welcome_back}
          </Text>
          <Text style={styles.name}>{MyStrings.user.name}</Text>
        </View>
      </View>
      <View style={styles.subHeader2}>
        {darkTheme ? (
          <AntDesign
            name="sun"
            size={22}
            color={"#575B66"}
            onPress={() => setDarkTheme(!darkTheme)}
          />
        ) : (
          <FontAwesome
            name="moon-o"
            size={22}
            color={"#575B66"}
            onPress={() => setDarkTheme(!darkTheme)}
          />
        )}
        <Feather name="bookmark" size={22} color={"#575B66"} />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header />
      {/* Search */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Search", { data: moviesList })}
        style={styles.searchBox}
      >
        <Feather name="search" size={20} color={"#aaa"} />
        <Text style={styles.text}>Search</Text>
        {/* <TextInput placeholder="Search" placeholderTextColor="#aaa" /> */}
      </TouchableOpacity>

      {/* Featured Carousel */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featuredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MovieDetails")}
            style={styles.featureCard}
          >
            <Image source={{ uri: item.image }} style={styles.featureImage} />

            <View style={styles.featureOverlay}>
              <Text style={styles.featureTitle}>{item.title}</Text>

              <Text style={styles.featureGenre}>{item.genre}</Text>

              <Text style={styles.featureMeta}>
                {item.duration} • {item.language}
              </Text>
            </View>

            <TouchableOpacity style={styles.playButton}>
              <Text style={{ color: "#fff" }}>▶</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* My List */}
      <MovieCarousel title="My List" data={moviesList} />

      {/* Recommended List*/}
      <MovieCarousel title="Recommended" data={moviesList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  subHeader: {
    flexDirection: "row",
  },

  subHeader2: {
    flexDirection: "row",
    gap: 18,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
  },

  welcome: {
    color: "#aaa",
    fontSize: 14,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  searchBox: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1B1B2A",
    marginHorizontal: 18,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginBottom: 24,
  },

  featureCard: {
    width: 300,
    height: 170,
    marginLeft: 20,
    borderRadius: 15,
    overflow: "hidden",
  },

  featureImage: {
    width: "100%",
    height: "100%",
  },

  featureOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },

  featureTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  featureGenre: {
    color: "#ddd",
    fontSize: 12,
  },

  featureMeta: {
    color: "#bbb",
    fontSize: 11,
  },

  text: {
    color: "#575B66",
    fontSize: 16,
    marginLeft: 8,
    marginVertical: 8,
  },

  playButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
