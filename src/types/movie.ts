import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type SectionItem =
  | { type: "header" }
  | { type: "featured"; data: FeaturedMovie[] }
  | { type: "myList"; data: Movie[] }
  | { type: "recommended"; data: Movie[] };

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  MovieDetails: { data: Movie };
  MovieList: { screenTitle: string };
  Favorites: undefined;
  Search: { data: Movie[] };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export interface Movie {
  id: string;
  title: string;
  rating: number;
  image: string;
  genre: string;
  date: string;
  duration: string;
  language: string;
  description: string;
  age: string;
  video: any;
  cast: Actor[];
}

export interface Actor {
  id: string;
  name: string;
  image: string;
  character?: string;
}

export interface FeaturedMovie {
  id: string;
  title: string;
  genre: string;
  date: string;
  duration: string;
  language: string;
  rating: number;
  image: string;
  details: Movie;
}

export interface MovieCarouselProps {
  data: FeaturedMovie[];
}

export interface MovieSectionProps {
  title: string;
  data: Movie[];
}

export interface MovieDetailsScreenProps {
  route: {
    params: {
      data: Movie;
    };
  };
}

export interface TagProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}
