import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import { useTheme } from "../hooks/useTheme";
import { featuredMovies, moviesList } from "../constants/data";
import { Strings } from "../constants/strings";
import { MovieSection } from "../components/MovieSection";
import Carousel from "react-native-reanimated-carousel";

export default function MainScreen() {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const { colors, theme, toggleTheme } = useTheme();

  const [activeIndex, setActiveIndex] = useState(0);

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
          <Feather name="bookmark" size={22} color={colors.toggleIcon} />
        </View>
      </View>
      {/* Search */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Search", { data: moviesList })}
        style={[styles.searchBox, { backgroundColor: colors.searchBackground }]}
      >
        <Feather name="search" size={20} color={colors.textMuted} />
        <Text style={[styles.searchText, { color: colors.textMuted }]}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );

  const MovieCarousel = ({ item }) => (
    <View>
      <Carousel
        loop
        width={width}
        height={200}
        autoPlay
        autoPlayInterval={3000}
        data={item.data}
        onSnapToItem={(index) => setActiveIndex(index)}
        scrollAnimationDuration={1000}
        renderItem={({ item: movie }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MovieDetails")}
            style={[styles.featureCard, { alignSelf: "center" }]}
          >
            <Image source={{ uri: movie.image }} style={styles.featureImage} />

            <View
              style={[
                styles.featureOverlay,
                { backgroundColor: colors.overlay },
              ]}
            >
              <Text style={[styles.featureTitle, { color: colors.text }]}>
                {movie.title}
              </Text>
              <Text
                style={[styles.featureGenre, { color: colors.textSecondary }]}
              >
                {movie.genre}
              </Text>
              <Text style={[styles.featureMeta, { color: colors.textMuted }]}>
                {movie.duration} • {movie.language}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.playButton, { backgroundColor: colors.accent }]}
            >
              <Text style={{ color: colors.text }}>▶</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <View style={styles.dotsContainer}>
        {item.data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex ? colors.accent : colors.textMuted,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );

  return (
    <FlatList
      style={[styles.container, { backgroundColor: colors.background }]}
      data={[
        { type: "header" },
        { type: "featured", data: featuredMovies },
        { type: "myList", data: moviesList },
        { type: "recommended", data: moviesList },
      ]}
      keyExtractor={(item, index) => index.toString()}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => {
        switch (item.type) {
          case "header":
            return <StickyHeader />;
          case "featured":
            return (
              <MovieCarousel item={item} />
              // <FlatList
              //   horizontal
              //   showsHorizontalScrollIndicator={false}
              //   data={item.data}
              //   keyExtractor={(movie) => movie.id}
              //   renderItem={({ item: movie }) => (
              // <TouchableOpacity
              //   onPress={() => navigation.navigate("MovieDetails")}
              //   style={styles.featureCard}
              // >
              //   <Image
              //     source={{ uri: movie.image }}
              //     style={styles.featureImage}
              //   />

              //   <View
              //     style={[
              //       styles.featureOverlay,
              //       { backgroundColor: colors.overlay },
              //     ]}
              //   >
              //     <Text
              //       style={[styles.featureTitle, { color: colors.text }]}
              //     >
              //       {movie.title}
              //     </Text>
              //     <Text
              //       style={[
              //         styles.featureGenre,
              //         { color: colors.textSecondary },
              //       ]}
              //     >
              //       {movie.genre}
              //     </Text>
              //     <Text
              //       style={[
              //         styles.featureMeta,
              //         { color: colors.textMuted },
              //       ]}
              //     >
              //       {movie.duration} • {movie.language}
              //     </Text>
              //   </View>

              //   <TouchableOpacity
              //     style={[
              //       styles.playButton,
              //       { backgroundColor: colors.accent },
              //     ]}
              //   >
              //     <Text style={{ color: colors.text }}>▶</Text>
              //   </TouchableOpacity>
              // </TouchableOpacity>
              //   )}
              // />
            );
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
    marginBottom: 24,
  },
  searchText: {
    fontSize: 16,
    marginLeft: 8,
    marginVertical: 8,
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
    right: 10,
    padding: 10,
    borderRadius: 8,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  featureGenre: {
    fontSize: 12,
  },
  featureMeta: {
    fontSize: 11,
  },
  playButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

I guess need to use this one react-native-snap-carousel instead, help me where to replace this one