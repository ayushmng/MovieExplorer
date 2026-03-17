import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import { useTheme } from "../hooks/useTheme";
import { featuredMovies, moviesList } from "../constants/data";
import { Strings } from "../constants/strings";
import { MovieSection } from "../components/MovieSection";
import { MovieCarousel } from "../components/MovieCarousel";
import { FeaturedMovie, Movie } from "../types/movie";

type SectionItem =
  | { type: "header" }
  | { type: "featured"; data: FeaturedMovie[] }
  | { type: "myList"; data: Movie[] }
  | { type: "recommended"; data: Movie[] };

export default function MainScreen() {
  const navigation = useNavigation();
  const { colors, theme, toggleTheme } = useTheme();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    console.log("Fetching data...");
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const sections: SectionItem[] = [
    { type: "header" },
    { type: "featured", data: featuredMovies },
    { type: "myList", data: moviesList },
    { type: "recommended", data: moviesList },
  ];

  const StickyHeader = () => (
    <View style={{ backgroundColor: colors.background }}>
      <View style={[styles.header, { backgroundColor: colors.background }]}>
        <View style={styles.subHeader}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/32.jpg",
            }}
            style={styles.avatar}
          />

          <View>
            <Text style={[styles.welcome, { color: colors.textMuted }]}>
              {Strings.displayText.welcome_back}
            </Text>
            <Text style={[styles.name, { color: colors.text }]}>
              {Strings.user.name}
            </Text>
          </View>
        </View>
        <View style={styles.subHeader2}>
          {theme === "dark" ? (
            <AntDesign
              name="sun"
              size={22}
              color={colors.toggleIcon}
              onPress={toggleTheme}
            />
          ) : (
            <FontAwesome
              name="moon-o"
              size={22}
              color={colors.toggleIcon}
              onPress={toggleTheme}
            />
          )}
          <Feather
            name="bookmark"
            size={22}
            color={colors.toggleIcon}
            onPress={() => navigation.navigate("Favorites")}
          />
        </View>
      </View>
      {/* Search */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Search", { data: moviesList })}
        style={[styles.searchBox, { backgroundColor: colors.searchBackground }]}
      >
        <Feather name="search" size={20} color={colors.textMuted} />
        <Text style={[styles.searchText, { color: colors.textMuted }]}>
          {Strings.screen.search}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={sections}
      stickyHeaderIndices={[0]}
      refreshing={refreshing}
      onRefresh={onRefresh}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      style={[styles.container, { backgroundColor: colors.background }]}
      renderItem={({ item }: { item: SectionItem }) => {
        switch (item.type) {
          case "header":
            return <StickyHeader />;
          case "featured":
            return <MovieCarousel data={item.data} />;
          case "myList":
            return <MovieSection title="My List" data={item.data} />;
          case "recommended":
            return <MovieSection title="Recommended" data={item.data} />;
          default:
            return null;
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: { paddingBottom: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
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
    fontSize: 14,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  searchBox: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginTop: 8,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  searchText: {
    fontSize: 16,
    marginLeft: 8,
    marginVertical: 8,
  },
});
