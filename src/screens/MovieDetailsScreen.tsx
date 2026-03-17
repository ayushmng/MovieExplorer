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
import VideoScreen from "../components/VideoScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../hooks/useTheme";
import { AntDesign, Feather } from "@expo/vector-icons";
import CustomButton from "../components/button/CustomButton";
import { Strings } from "../constants/strings";

interface TagProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

export default function MovieDetailsScreen() {
  const route = useRoute();
  const { data } = route?.params;
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(false);
  const { title, description, duration, genre, rating, cast, age } = data;

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

      <Text style={[styles.duration, { color: colors.text }]}>{duration}</Text>

      {/* Movie Info */}
      <View style={[styles.content, { backgroundColor: colors.background }]}>
        <View style={styles.tagsRow}>
          <Tag
            text="+18"
            backgroundColor={colors.card}
            textColor={colors.text}
          />
          <Tag
            text={genre}
            backgroundColor={colors.card}
            textColor={colors.text}
          />
          <Tag
            text={`⭐ ${rating}`}
            backgroundColor={colors.card}
            textColor={colors.text}
          />

          <TouchableOpacity style={styles.heart}>
            <AntDesign name="heart" size={22} color={colors.accent} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {expanded ? description : description.slice(0, 110)}

          <Text
            style={[styles.showMore, { color: colors.accent }]}
            onPress={() => setExpanded(!expanded)}
          >
            {expanded ? Strings.button.showLess : Strings.button.showMore}
          </Text>
        </Text>

        <Text style={[styles.actorsTitle, { color: colors.text }]}>Actors</Text>

        <FlatList
          horizontal
          data={cast}
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
        <CustomButton
          text={Strings.button.openImdb}
          containerStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  duration: {
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
  button: { marginTop: 20 },
});
