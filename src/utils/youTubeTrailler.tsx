import useSWR from "swr";

const { data, error, isLoading } = useSWR(
  movieId
    ? [
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}?language=en-US`,
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/credits?language=en-US`,
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`,
      ]
    : null,
  (urls: string[]) => Promise.all(urls.map(fetcherInput))
);
