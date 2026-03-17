import { Movie } from "../types/movie";

export const featuredMovies = [
  {
    id: "1",
    title: "Under Paris",
    genre: "Drama, Horror, Mystery & Thriller",
    date: "15 March, 2020",
    duration: "1h 30min",
    language: "Arabic",
    rating: 3.7,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDM5ODBiN2ItOTk4Yi00NzgyLWE2YTktYzhjYTc2ODE4ZTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    details: {
      id: "1",
      title: "Under Paris",
      rating: 3.7,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDM5ODBiN2ItOTk4Yi00NzgyLWE2YTktYzhjYTc2ODE4ZTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Drama, Horror, Mystery & Thriller",
      date: "15 March, 2020",
      duration: "1h 30min",
      language: "Arabic",
      description:
        "To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.",
      age: "+16",
      video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
      cast: [
        {
          id: "101",
          name: "Bérénice Bejo",
          image:
            "https://image.tmdb.org/t/p/w500/jY4nS8NxVkg4CSkiqhSSjMBDlNI.jpg",
          character: "Sofia",
        },
        {
          id: "102",
          name: "Nassim Lyes",
          image:
            "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
          character: "Adil",
        },
        {
          id: "103",
          name: "Bérénice Bejo",
          image:
            "https://image.tmdb.org/t/p/w500/jY4nS8NxVkg4CSkiqhSSjMBDlNI.jpg",
        },
        {
          id: "104",
          name: "Nassim Lyes",
          image:
            "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
        },
      ],
    },
  },
  {
    id: "2",
    title: "Damsel",
    genre: "Mystery & Thriller",
    date: "15 March, 2020",
    duration: "2h 05min",
    language: "English",
    rating: 4.2,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTAzODc1ZjUtNGQwZS00YTc2LTliNzQtMDdlNzllNmU5Yzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    details: {
      id: "2",
      title: "Damsel",
      rating: 4.2,
      image:
        "https://m.media-amazon.com/images/M/MV5BZTAzODc1ZjUtNGQwZS00YTc2LTliNzQtMDdlNzllNmU5Yzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Mystery & Thriller",
      date: "15 March, 2020",
      duration: "2h 05min",
      language: "English",
      description:
        "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
      age: "+13",
      video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
      cast: [
        {
          id: "201",
          name: "Millie Bobby Brown",
          image:
            "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
          character: "Elodie",
        },
      ],
    },
  },
  {
    id: "3",
    title: "Pandora",
    genre: "SciFi & Thriller",
    date: "15 March, 2020",
    duration: "1h 58min",
    language: "French",
    rating: 4.5,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzNmMjJjM2ItOGVlNy00ZDQ2LTkzMDMtOGEyNzBjNmVjNzU3XkEyXkFqcGc@._V1_.jpg",
    details: {
      id: "3",
      title: "Pandora",
      rating: 4.5,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzNmMjJjM2ItOGVlNy00ZDQ2LTkzMDMtOGEyNzBjNmVjNzU3XkEyXkFqcGc@._V1_.jpg",
      genre: "SciFi & Thriller",
      date: "15 March, 2020",
      duration: "1h 58min",
      language: "French",
      description:
        "In a post-apocalyptic world, a young woman must protect a mysterious object that holds the key to humanity's survival.",
      age: "+15",
      video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
      cast: [
        {
          id: "201",
          name: "Millie Bobby Brown",
          image:
            "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
          character: "Elodie",
        },
        {
          id: "202",
          name: "Bérénice Bejo",
          image:
            "https://image.tmdb.org/t/p/w500/jY4nS8NxVkg4CSkiqhSSjMBDlNI.jpg",
        },
        {
          id: "203",
          name: "Nassim Lyes",
          image:
            "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
        },
      ],
    },
  },
];

export const moviesList: Movie[] = [
  {
    id: "1",
    title: "Under Paris",
    rating: 3.7,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDM5ODBiN2ItOTk4Yi00NzgyLWE2YTktYzhjYTc2ODE4ZTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "Drama, Horror, Mystery & Thriller",
    date: "15 March, 2020",
    duration: "1h 30min",
    language: "Arabic",
    description:
      "To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.",
    age: "+16",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    cast: [
      {
        id: "101",
        name: "Bérénice Bejo",
        image:
          "https://image.tmdb.org/t/p/w500/jY4nS8NxVkg4CSkiqhSSjMBDlNI.jpg",
        character: "Sofia",
      },
      {
        id: "102",
        name: "Nassim Lyes",
        image:
          "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
        character: "Adil",
      },
      {
        id: "103",
        name: "Bérénice Bejo",
        image:
          "https://image.tmdb.org/t/p/w500/jY4nS8NxVkg4CSkiqhSSjMBDlNI.jpg",
      },
      {
        id: "104",
        name: "Nassim Lyes",
        image:
          "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Damsel",
    rating: 4.2,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTAzODc1ZjUtNGQwZS00YTc2LTliNzQtMDdlNzllNmU5Yzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "Mystery & Thriller",
    date: "15 March, 2020",
    duration: "2h 05min",
    language: "English",
    description:
      "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
    age: "+13",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    cast: [
      {
        id: "201",
        name: "Millie Bobby Brown",
        image:
          "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
        character: "Elodie",
      },
    ],
  },
  {
    id: "3",
    title: "Pandora",
    rating: 4.5,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzNmMjJjM2ItOGVlNy00ZDQ2LTkzMDMtOGEyNzBjNmVjNzU3XkEyXkFqcGc@._V1_.jpg",
    genre: "SciFi & Thriller",
    date: "15 March, 2020",
    duration: "1h 58min",
    language: "French",
    description:
      "In a post-apocalyptic world, a young woman must protect a mysterious object that holds the key to humanity's survival.",
    age: "+15",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    cast: [
      {
        id: "201",
        name: "Millie Bobby Brown",
        image:
          "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
        character: "Elodie",
      },
      {
        id: "202",
        name: "Bérénice Bejo",
        image:
          "https://image.tmdb.org/t/p/w500/jY4nS8NxVkg4CSkiqhSSjMBDlNI.jpg",
      },
      {
        id: "203",
        name: "Nassim Lyes",
        image:
          "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Conjuring The Last Rites",
    rating: 4.1,
    image:
      "https://m.media-amazon.com/images/M/MV5BMWQyMzU1YWItYzczYy00MGZiLTg1ZTUtY2QwMWViNGQxNmJhXkEyXkFqcGc@._V1_.jpg",
    genre: "Horror",
    date: "10 June, 2024",
    duration: "1h 55min",
    language: "English",
    description:
      'In a rain-soaked metropolis where memories can be traded like currency, a weary private investigator is hired to find a "stolen" childhood. As the digital trail deepens, he realizes his own past might just be a high-priced forgery.',
    age: "+18",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    cast: [
      {
        id: "201",
        name: "Millie Bobby Brown",
        image:
          "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
        character: "Elodie",
      },
    ],
  },
  {
    id: "5",
    title: "Sinners",
    rating: 3.2,
    image:
      "https://hellobeautiful.com/wp-content/uploads/sites/50/2025/03/17418884444224.png",
    genre: "Drama",
    date: "5 April, 2025",
    duration: "2h 10min",
    language: "English",
    age: "+16",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    description:
      "Two strangers get accidentally locked in a quirky local museum overnight during a blackout. Armed only with flashlights and a shared bottle of wine, they spend the night curating their own life stories among the dusty artifacts.",
    cast: [
      {
        id: "201",
        name: "Millie Bobby Brown",
        image:
          "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
        character: "Elodie",
      },
      {
        id: "202",
        name: "Léa Léviant",
        image:
          "https://image.tmdb.org/t/p/w500/dRbpHn9Ezg4QPGVE3Sk2rYZRk5v.jpg",
      },
      {
        id: "203",
        name: "Anne Marivin",
        image:
          "https://image.tmdb.org/t/p/w500/2Wn9p8h4K0qHn4pWZ7dBDEuDfSU.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "Watcher",
    rating: 4.0,
    image:
      "https://m.media-amazon.com/images/I/91wk-z1zOjL._AC_UF1000,1000_QL80_.jpg",
    genre: "Thriller",
    date: "20 July, 2023",
    duration: "1h 48min",
    language: "English",
    age: "+16",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    description:
      "Following a sudden lunar base decompression, a lone technician has ninety minutes of air to traverse three miles of cratered terrain. With her radio malfunctioning, her only guide is the rhythmic, terrifying sound of her own failing life support.",
    cast: [
      {
        id: "201",
        name: "Millie Bobby Brown",
        image:
          "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
        character: "Elodie",
      },
    ],
  },
  {
    id: "7",
    title: "Inception",
    rating: 5.0,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/best-psychological-thriller-movies-inception-66799aa29a84f.png",
    genre: "Sci-Fi, Action",
    date: "16 July, 2010",
    duration: "2h 28min",
    language: "English",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    age: "+13",
    video: require("../../assets/video/The_Conjuring_Last Rites_Trailer.mp4"),
    cast: [
      {
        id: "201",
        name: "Millie Bobby Brown",
        image:
          "https://image.tmdb.org/t/p/w500/vklYqG7aNQR7jRzwQw2Gk7yQz8L.jpg",
        character: "Elodie",
      },
      {
        id: "202",
        name: "Nassim Lyes",
        image:
          "https://image.tmdb.org/t/p/w500/wS9TiG6pZeRAgvD5zsxFrqAKeSK.jpg",
      },
      {
        id: "203",
        name: "Léa Léviant",
        image:
          "https://image.tmdb.org/t/p/w500/dRbpHn9Ezg4QPGVE3Sk2rYZRk5v.jpg",
      },
    ],
  },
];
