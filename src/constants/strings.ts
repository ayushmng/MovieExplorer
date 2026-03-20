export const IMAGE_WIDTH = 120;
export const IMAGE_HEIGHT = 180;

export const ROUTES = {
  SPLASH: "Splash",
  MAIN: "Main",
  MOVIE_DETAILS: "MovieDetails",
} as const;

export const Strings = {
  displayText: {
    welcomeBack: "Welcome Back",
    noFavorites: "No favorites found",
  },
  route: {
    splash: "Splash",
    main: "Main",
    movieDetails: "MovieDetails",
    search: "Search",
    movieList: "MovieList",
    favorites: "Favorites",
  },
  screen: {
    search: "Search",
    favorites: "Favorites",
    movieList: "Movies List",
  },
  user: {
    name: "Ayush Katuwal",
  },
  button: {
    openImdb: "Open IMDb",
    showMore: " Show More",
    showLess: " Show Less",
  },
} as const;
