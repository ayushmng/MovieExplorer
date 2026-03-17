import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../hooks/useTheme";
import { FeaturedMovie, Movie } from "../types/movie";

export const MovieCarousel = ({ data }: { data: FeaturedMovie[] }) => {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={200}
        autoPlay
        autoPlayInterval={3000}
        data={data}
        onSnapToItem={(index) => setActiveIndex(index)}
        scrollAnimationDuration={1000}
        renderItem={({ item }: { item: FeaturedMovie }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MovieDetails", { data: item.details })
            }
            style={[styles.featureCard, { alignSelf: "center" }]}
          >
            <Image source={{ uri: item.image }} style={styles.featureImage} />

            <View
              style={[
                styles.featureOverlay,
                { backgroundColor: colors.overlay },
              ]}
            >
              <Text style={[styles.featureTitle, { color: colors.text }]}>
                {item.title}
              </Text>
              <Text
                style={[styles.featureGenre, { color: colors.textSecondary }]}
              >
                {item.genre}
              </Text>
              <Text style={[styles.featureMeta, { color: colors.textMuted }]}>
                {item.duration} • {item.language}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.playButton, { backgroundColor: colors.accent }]}
            >
              <Text style={[styles.playIcon, { color: colors.text }]}>▶</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
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
};

const styles = StyleSheet.create({
  featureCard: {
    width: 340,
    height: 170,
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
  playIcon: { color: "black", fontSize: 18, left: 1 },
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
