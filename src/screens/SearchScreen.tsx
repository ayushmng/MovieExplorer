import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../themes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Movie, RouteProps } from "../types/movie";
import { Entypo, Feather } from "@expo/vector-icons";
import CardComponent from "../components/card/CardComponent";

export default function SearchScreen() {
  const route = useRoute<RouteProps<"Search">>();
  const { data } = route?.params;
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<Movie[]>(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    let filteredResults: Movie[];

    if (!debouncedQuery) {
      filteredResults = [];
      // filteredResults = data;
    } else {
      filteredResults = data.filter((item: Movie) =>
        item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
    }

    // Only update if results actually changed
    setResults((prevResults) => {
      if (JSON.stringify(prevResults) === JSON.stringify(filteredResults)) {
        return prevResults;
      }
      return filteredResults;
    });
  }, [debouncedQuery, data]);

  const clearSearch = () => {
    setQuery("");
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <CardComponent item={item} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Feather name="search" size={50} color={colors.textMuted} />
      <Text style={[styles.emptyText, { color: colors.textMuted }]}>
        {query
          ? `No results found for "${query}"`
          : "Start searching for movies"}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={22} color={colors.icon} />
        </TouchableOpacity>
        <View
          style={[
            styles.searchBox,
            { backgroundColor: colors.searchBackground },
          ]}
        >
          <Feather name="search" size={20} color={colors.textMuted} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search by title..."
            placeholderTextColor="#aaa"
            style={[styles.input, { color: colors.text }]}
            autoFocus
          />

          {query.length > 0 && (
            <TouchableOpacity onPress={clearSearch}>
              <Entypo name="cross" size={20} color="#aaa" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {results.length > 0 && (
        <Text style={[styles.resultsCount, { color: colors.textMuted }]}>
          Found {results.length} {results.length === 1 ? "movie" : "movies"}
        </Text>
      )}
      <FlatList
        data={results}
        keyExtractor={(item: Movie) => item.id}
        renderItem={renderMovieItem}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.resultsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1a",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  backBtn: {
    marginRight: 10,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1B1B2A",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    padding: 0,
  },

  resultsCount: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    fontSize: 14,
    color: "#aaa",
  },

  resultsList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    flexGrow: 1,
  },

  movieItem: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#1B1B2A",
    borderRadius: 12,
    overflow: "hidden",
  },

  movieImage: {
    width: 80,
    height: 120,
    resizeMode: "cover",
  },

  movieInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },

  movieTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },

  movieMeta: {
    gap: 8,
  },

  movieGenre: {
    fontSize: 13,
    color: "#aaa",
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rating: {
    fontSize: 14,
    fontWeight: "500",
  },

  age: {
    fontSize: 12,
    color: "#aaa",
    backgroundColor: "#2A2A3A",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
  },
});
