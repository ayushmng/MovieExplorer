import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { moviesList } from "../constants/data";
import { useTheme } from "../themes";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Strings } from "../constants/strings";
import CardComponent from "../components/card/CardComponent";
import { Movie } from "../types/movie";

const IMAGE_WIDTH = 120;
const IMAGE_HEIGHT = 180;

const MovieList = () => {
  const route = useRoute();
  const { screenTitle } = route?.params;
  const navigation = useNavigation();
  const { colors } = useTheme();

  const PAGE_SIZE = 5;

  const [visibleMovies, setVisibleMovies] = useState(
    moviesList.slice(0, PAGE_SIZE),
  );

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return;

    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const newData = moviesList.slice(start, end);

    if (newData.length > 0) {
      setLoading(true);

      setTimeout(() => {
        setVisibleMovies((prev) => [...prev, ...newData]);
        setPage((prev) => prev + 1);
        setLoading(false);
      }, 500);
    }
  };

  console.log("Current page: ", page);

  const StickyHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Feather name="arrow-left" size={26} color={colors.icon} />
      </TouchableOpacity>
      <Text style={[styles.titleText, { color: colors.text }]}>
        {screenTitle ?? Strings.screen.movieList}
      </Text>
    </View>
  );

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <CardComponent item={item} />
  );

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="small" color={colors.accent} />
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StickyHeader />
      <FlatList
        data={visibleMovies}
        renderItem={renderMovieItem}
        initialNumToRender={PAGE_SIZE}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  header: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  titleText: { fontSize: 22, fontWeight: "bold" },
  contentContainerStyle: { paddingVertical: 8 },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 8,
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
    height: IMAGE_HEIGHT,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: "#888",
  },
  backButton: {
    padding: 8,
    alignSelf: "flex-start",
  },
});

export default MovieList;
