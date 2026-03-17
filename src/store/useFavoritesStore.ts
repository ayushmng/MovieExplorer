import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../types/movie";

type FavoritesState = {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (movie) => {
        const { favorites } = get();
        const exists = favorites.some((m) => m.id === movie.id);

        if (exists) {
          set({
            favorites: favorites.filter((m) => m.id !== movie.id),
          });
        } else {
          set({
            favorites: [...favorites, movie],
          });
        }
      },

      isFavorite: (id) => {
        return get().favorites.some((m) => m.id === id);
      },
    }),
    {
      name: "favorites-storage",
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
    },
  ),
);
