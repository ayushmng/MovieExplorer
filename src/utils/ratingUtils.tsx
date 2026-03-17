import { View, Text, StyleSheet } from "react-native";

export const getStars = (rating, maxStars = 5) => {
  const fullStars = Math.round(rating);
  const emptyStars = maxStars - fullStars;

  return (
    <View style={styles.starContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <Text key={`full-${i}`} style={styles.starFilled}>
          ★
        </Text>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <Text key={`empty-${i}`} style={styles.starEmpty}>
          ★
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
  },
  starFilled: {
    fontSize: 20,
    color: "#FFD700",
  },
  starEmpty: {
    fontSize: 20,
    color: "#E0E0E0",
  },
});
