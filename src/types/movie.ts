export interface Movie {
  id: string;
  title: string;
  rating: number;
  image: string;
}

export interface MovieCarouselProps {
  title: string;
  data: Movie[];
}
