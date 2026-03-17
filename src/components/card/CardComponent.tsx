import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../themes";

export default function CardComponent({ item }) {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.movieItem, { backgroundColor: colors.card }]}
      onPress={() => navigation.navigate("MovieDetails", { data: item })}
    >
      <Image source={{ uri: item.image }} style={styles.movieImage} />

      <View style={styles.movieInfo}>
        <Text style={[styles.movieTitle, { color: colors.text }]}>
          {item.title}
        </Text>

        <View style={styles.movieMeta}>
          <Text style={[styles.movieGenre, { color: colors.textMuted }]}>
            {item.genre} • {item.duration}
          </Text>

          <View style={styles.ratingContainer}>
            <Text style={[styles.rating, { color: colors.accent }]}>
              ⭐{" "}
              {item.rating && item?.rating?.toString().length === 1
                ? `${item?.rating}.0`
                : item?.rating}
            </Text>

            <Text
              style={[
                styles.age,
                {
                  color: colors.textMuted,
                  backgroundColor: colors.border,
                },
              ]}
            >
              {item.age}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movieItem: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#1B1B2A",
    borderRadius: 12,
    overflow: "hidden",
  },

  movieImage: {
    width: 92,
    height: 128,
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
});
