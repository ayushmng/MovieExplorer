import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getStars } from "../utils/ratingUtils";
import { MovieCarouselProps } from "../types/movie";
import { useTheme } from "../themes";

export const MovieCarousel = ({ title, data }: MovieCarouselProps) => {
  const { colors, theme, toggleTheme } = useTheme();

  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {title}
        </Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={28}
          color={colors.icon}
        />
      </TouchableOpacity>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text
              numberOfLines={1}
              style={[styles.movieTitle, { color: colors.text }]}
            >
              {item.title}
            </Text>
            <Text style={styles.rating}>{getStars(item.rating)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },
  movieCard: {
    width: 120,
    marginLeft: 20,
  },
  movieImage: {
    width: 120,
    height: 170,
    borderRadius: 12,
  },
  movieTitle: {
    color: "#fff",
    paddingVertical: 6,
    marginTop: 8,
  },
  rating: {
    color: "gold",
    fontSize: 12,
  },
});
