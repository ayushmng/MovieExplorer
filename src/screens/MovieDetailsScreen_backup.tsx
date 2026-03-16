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

export default function MovieDetailsScreen() {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Video */}
      <View style={styles.videoContainer}>
        <VideoScreen />
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.icon}>⤴</Text>
        </TouchableOpacity>

        {/* Play Button */}
        {/* <TouchableOpacity style={styles.playButton} onPress={toggleVideo}>
          <Text style={styles.playIcon}>▶</Text>
        </TouchableOpacity> */}

        <Text style={styles.duration}>{movieDetails.duration}</Text>
      </View>

      {/* Movie Info */}
      <View style={styles.content}>
        <View style={styles.tagsRow}>
          <Tag text="+18" />
          <Tag text={movieDetails.genre} />
          <Tag text={`⭐ ${movieDetails.rating}`} />

          <TouchableOpacity style={styles.heart}>
            <Text>❤️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{movieDetails.title}</Text>

        <Text style={styles.description}>
          {expanded
            ? movieDetails.description
            : movieDetails.description.slice(0, 110)}

          <Text style={styles.showMore} onPress={() => setExpanded(!expanded)}>
            {expanded ? " Show Less" : " Show More"}
          </Text>
        </Text>

        {/* Actors */}
        <Text style={styles.actorsTitle}>Actors</Text>

        <FlatList
          horizontal
          data={actors}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.actorCard}>
              <Image source={{ uri: item.image }} style={styles.actorImage} />
              <Text style={styles.actorName}>{item.name}</Text>
            </View>
          )}
        />

        {/* IMDb Button */}
        <TouchableOpacity style={styles.imdbButton}>
          <Text style={styles.imdbText}>Open IMDb</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Tag(props) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121223",
  },

  videoContainer: {
    height: 420,
  },

  video: {
    width: "100%",
    height: "100%",
  },

  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  shareButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },

  icon: {
    color: "#fff",
    fontSize: 24,
  },

  playButton: {
    position: "absolute",
    alignSelf: "center",
    top: "45%",
    backgroundColor: "red",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  playIcon: {
    color: "#fff",
    fontSize: 28,
  },

  duration: {
    position: "absolute",
    right: 20,
    bottom: 20,
    color: "#fff",
    fontSize: 16,
  },

  content: {
    padding: 20,
  },

  tagsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tag: {
    backgroundColor: "#2A2A3D",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 10,
  },

  tagText: {
    color: "#fff",
  },

  heart: {
    marginLeft: "auto",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },

  description: {
    color: "#ddd",
    marginTop: 10,
    lineHeight: 22,
  },

  showMore: {
    color: "red",
  },

  actorsTitle: {
    fontSize: 24,
    color: "#fff",
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
    color: "#fff",
    marginTop: 6,
  },

  imdbButton: {
    backgroundColor: "#F2C94C",
    padding: 18,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  imdbText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
