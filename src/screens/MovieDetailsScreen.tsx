import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { movieDetails, actors } from "../constants/data";
import VideoScreen from "../components/VideoScreen";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../hooks/useTheme";
import { AntDesign, Feather } from "@expo/vector-icons";

interface TagProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

export default function MovieDetailsScreen() {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const { colors } = useTheme();

  const Tag = ({ text, backgroundColor, textColor }: TagProps) => {
    return (
      <View style={[styles.tag, { backgroundColor }]}>
        <Text style={[styles.tagText, { color: textColor }]}>{text}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.buttonStyles}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={26} color={colors.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>
          <Feather name="share-2" size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>

      <VideoScreen />

      <Text style={[styles.duration, { color: colors.text }]}>
        {movieDetails.duration}
      </Text>

      {/* Movie Info */}
      <View style={[styles.content, { backgroundColor: colors.background }]}>
        <View style={styles.tagsRow}>
          <Tag
            text="+18"
            backgroundColor={colors.card}
            textColor={colors.text}
          />
          <Tag
            text={movieDetails.genre}
            backgroundColor={colors.card}
            textColor={colors.text}
          />
          <Tag
            text={`⭐ ${movieDetails.rating}`}
            backgroundColor={colors.card}
            textColor={colors.text}
          />

          <TouchableOpacity style={styles.heart}>
            <AntDesign name="heart" size={22} color={colors.accent} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.title, { color: colors.text }]}>
          {movieDetails.title}
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {expanded
            ? movieDetails.description
            : movieDetails.description.slice(0, 110)}

          <Text
            style={[styles.showMore, { color: colors.accent }]}
            onPress={() => setExpanded(!expanded)}
          >
            {expanded ? " Show Less" : " Show More"}
          </Text>
        </Text>

        {/* Actors */}
        <Text style={[styles.actorsTitle, { color: colors.text }]}>Actors</Text>

        <FlatList
          horizontal
          data={actors}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.actorCard}>
              <Image source={{ uri: item.image }} style={styles.actorImage} />
              <Text style={[styles.actorName, { color: colors.textSecondary }]}>
                {item.name}
              </Text>
            </View>
          )}
        />

        {/* IMDb Button */}
        <TouchableOpacity style={styles.imdbButton}>
          <Text style={[styles.imdbText, { color: colors.text }]}>
            Open IMDb
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  videoContainer: {
    // height: 420,
    // position: "relative",
  },

  // video: {
  //   width: "100%",
  //   height: "100%",
  // },
  buttonStyles: {
    marginBottom: 48,
  },

  backButton: {
    position: "absolute",
    left: 20,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  shareButton: {
    position: "absolute",
    right: 20,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  icon: {
    fontSize: 24,
  },

  playButton: {
    position: "absolute",
    alignSelf: "center",
    top: "45%",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  playIcon: {
    fontSize: 28,
  },

  duration: {
    // position: "absolute",
    // zIndex: 10,
    // right: 20,
    // bottom: 20,
    fontSize: 16,
    margin: 8,
    alignSelf: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  content: {
    padding: 20,
  },

  tagsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 10,
  },

  tagText: {
    fontSize: 14,
  },

  heart: {
    marginLeft: "auto",
    padding: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },

  description: {
    marginTop: 10,
    lineHeight: 22,
  },

  showMore: {
    fontWeight: "600",
  },

  actorsTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 15,
  },

  actorCard: {
    width: 110,
    marginRight: 15,
  },

  actorImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
  },

  actorName: {
    marginTop: 6,
    textAlign: "center",
  },

  imdbButton: {
    padding: 18,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#F5C518",
  },

  imdbText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
