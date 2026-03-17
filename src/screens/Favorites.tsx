import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../themes";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Strings } from "../constants/strings";
import CardComponent from "../components/card/CardComponent";
import { Movie } from "../types/movie";
import { useFavoritesStore } from "../store/useFavoritesStore";

const IMAGE_WIDTH = 120;
const IMAGE_HEIGHT = 180;

const Favorites = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const { favorites } = useFavoritesStore();

  const StickyHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Feather name="arrow-left" size={26} color={colors.icon} />
      </TouchableOpacity>
      <Text style={[styles.titleText, { color: colors.text }]}>
        {Strings.screen.favorites}
      </Text>
    </View>
  );

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <CardComponent item={item} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Feather name="search" size={50} color={colors.textMuted} />
      <Text style={[styles.emptyText, { color: colors.textMuted }]}>
        No favorites found
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StickyHeader />
      <FlatList
        data={favorites}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Favorites;

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
  contentContainerStyle: { flex: 1, paddingVertical: 8 },
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
