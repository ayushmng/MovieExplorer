import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { moviesList } from "../constants/data";
import { useTheme } from "../themes";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Strings } from "../constants/strings";

const IMAGE_WIDTH = 120;
const IMAGE_HEIGHT = 180;

const MovieList = () => {
  const route = useRoute();
  const { screenTitle } = route?.params;
  const navigation = useNavigation();
  const { colors } = useTheme();

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

  const renderItem = ({ item }: { item: (typeof moviesList)[0] }) => (
    <View style={[styles.itemContainer, { backgroundColor: colors.card }]}>
      {/* Movie Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Movie Details */}
      <View style={styles.detailsContainer}>
        <Text style={[styles.title, { color: colors.textSecondary }]}>
          {item.title}
        </Text>
        <Text style={[styles.rating, { color: colors.textMuted }]}>
          Rating: {item.rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StickyHeader />
      <FlatList
        data={moviesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: { gap: 28, flexDirection: "row", alignItems: "center" },
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
    left: 20,
    padding: 8,
    alignSelf: "flex-start",
  },
});

export default MovieList;
