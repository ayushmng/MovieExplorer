import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes";

export default function SearchScreen({ data = [], onResults }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  // Filter results
  useEffect(() => {
    if (!debouncedQuery) {
      onResults?.(data);
      return;
    }

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );

    onResults?.(filtered);
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery("");
    onResults?.(data);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={22} color={colors.icon} />
        </TouchableOpacity>

        {/* Search Box */}
        <View
          style={[
            styles.searchBox,
            { backgroundColor: colors.searchBackground },
          ]}
        >
          <Feather name="search" size={20} color={colors.textMuted} />

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search..."
            placeholderTextColor="#aaa"
            style={[styles.input, { color: colors.text }]}
            autoFocus
          />

          {query.length > 0 && (
            <TouchableOpacity onPress={clearSearch}>
              <Entypo name="cross" size={20} color="#aaa" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1a",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  backBtn: {
    marginRight: 10,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1B1B2A",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    color: "#fff",
  },
});
