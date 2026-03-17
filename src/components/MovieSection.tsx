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
import { Movie, MovieCarouselProps, MovieSectionProps } from "../types/movie";
import { useTheme } from "../themes";
import { useNavigation } from "@react-navigation/native";

export const MovieSection = ({ title, data }: MovieSectionProps) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={styles.section}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MovieList", { screenTitle: title })}
        style={styles.sectionHeader}
      >
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
        keyExtractor={(item: Movie) => item.id}
        renderItem={({ item }: { item: Movie }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MovieDetails", { data: item })}
            style={styles.movieCard}
          >
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text
              numberOfLines={1}
              style={[styles.movieTitle, { color: colors.text }]}
            >
              {item.title}
            </Text>
            <Text style={styles.rating}>{getStars(item.rating)}</Text>
          </TouchableOpacity>
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
