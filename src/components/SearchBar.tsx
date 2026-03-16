import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useTheme } from "../themes";

export default function SearchBar({ data = [], onResults }) {
  const { colors } = useTheme();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);

  // Filter results
  useEffect(() => {
    if (!debouncedQuery) {
      onResults(data);
      return;
    }

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );

    onResults(filtered);
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery("");
    onResults(data);
  };

  return (
    <View style={[styles.searchBox, { backgroundColor: colors.background }]}>
      <Feather name="search" size={20} color="#aaa" />

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      {query.length > 1 && (
        <TouchableOpacity onPress={clearSearch}>
          <Entypo name="cross" size={20} color="#aaa" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1B1B2A",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    color: "#fff",
  },
});
