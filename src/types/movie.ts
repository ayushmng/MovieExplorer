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
