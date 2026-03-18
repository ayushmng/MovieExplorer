import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Share,
  Alert,
  Linking,
} from "react-native";
import VideoScreen from "../components/VideoScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../hooks/useTheme";
import { Feather, FontAwesome } from "@expo/vector-icons";
import CustomButton from "../components/button/CustomButton";
import { Strings } from "../constants/strings";
import LottieView from "lottie-react-native";
import { useFavoritesStore } from "../store/useFavoritesStore";

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

  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const liked = isFavorite(data.id);

  const animationRef = useRef<LottieView>(null);
  const {
    title,
    description,
    duration,
    genre,
    rating,
    cast,
    age,
    image,
    video,
  } = data;

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: image,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Can't open URL:", url);
    }
  };

  const toggleAnimation = () => {
    const wasLiked = isFavorite(data.id);

    toggleFavorite(data);

    if (!wasLiked) {
      animationRef.current?.play();
    }
  };

  const Header = () => (
    <View style={styles.buttonStyles}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Feather name="arrow-left" size={26} color={colors.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={shareApp} style={styles.shareButton}>
        <Feather name="share-2" size={24} color={colors.icon} />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.actorCard}>
      <Image source={{ uri: item.image }} style={styles.actorImage} />
      <Text style={[styles.actorName, { color: colors.textSecondary }]}>
        {item.name}
      </Text>
    </View>
  );

  const Tag = ({ text, backgroundColor, textColor }: TagProps) => {
    return (
      <View style={[styles.tag, { backgroundColor }]}>
        <Text style={[styles.tagText, { color: textColor }]}>{text}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Header />
      <VideoScreen videoUrl={video} />
      <Text
        style={[
          styles.duration,
          { color: colors.text, backgroundColor: colors.card },
        ]}
      >
        {duration}
      </Text>

      {/* Movie Info */}
      <View style={[styles.content, { backgroundColor: colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Tag
            text={age}
            backgroundColor={colors.card}
            textColor={colors.text}
          />
          <Tag
            text={genre}
            backgroundColor={colors.card}
            textColor={colors.text}
          />
          <Tag
            text={`⭐ ${rating && rating?.toString()?.length === 1 ? `${rating}.0` : rating}`}
            backgroundColor={colors.card}
            textColor={colors.text}
          />
        </ScrollView>

        <View style={styles.heartWrapper}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.title, { color: colors.text }]}
          >
            {title}
          </Text>
          <TouchableOpacity style={styles.heart} onPress={toggleAnimation}>
            {liked ? (
              <LottieView
                ref={animationRef}
                source={require("../../assets/animations/like_heart.json")}
                style={styles.lottie}
                loop={false}
                autoPlay={liked}
              />
            ) : (
              <FontAwesome name="heart-o" size={24} color={colors.accent} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {expanded ? description : `${description.slice(0, 100)}...`}
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
          renderItem={renderItem}
        />
        <CustomButton
          onPress={() => handlePress(image)}
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
    marginTop: 12,
    marginRight: 8,
    fontSize: 16,
    alignSelf: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 6,
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
  lottie: {
    width: 120,
    height: 120,
  },
  heartWrapper: {
    flex: 1,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heart: {
    top: 2,
    right: 4,
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 16,
    marginRight: 8,
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
    width: 120,
    gap: 16,
    marginRight: 16,
  },
  actorImage: {
    width: 120,
    height: 160,
    borderRadius: 12,
  },
  actorName: {
    marginTop: 6,
    textAlign: "center",
  },
  button: { marginTop: 20 },
});
