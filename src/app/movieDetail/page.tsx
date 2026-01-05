"use client";

import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { fetcherInput } from "@/utils/fetcherInput";
import Similiar from "./components/Similiar";
import MovieTeams from "./components/MovieTeams";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("query");

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

  const [movieData = {}, creditsData = {}, videosData = {}] = data || [];

  const trailer = videosData?.results?.find(
    (v: any) => v.type === "Trailer" && v.site === "YouTube"
  );

  return (
    <div className="px-5 md:px-10 py-5 space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="font-bold md:text-4xl text-2xl">{movieData?.title}</p>
          <p className="text-lg mt-1 text-gray-600">
            {movieData?.release_date} | {Math.floor(movieData?.runtime / 60)}h{" "}
            {movieData?.runtime % 60}m
          </p>
        </div>

        <div className="text-right">
          <p className="text-[12px] font-medium text-gray-500">Rating</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-400 text-xl">⭐️</span>
            <div className="text-right">
              <p className="text-lg font-semibold">
                {movieData?.vote_average}
                <span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400 text-[12px]">
                {movieData?.vote_count} votes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-8 md:gap-0 md:flex-row justify-between">
        <img
          className="w-25 md:w-72 object-cover rounded-lg shadow-md"
          src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
          alt="Poster"
        />

        {trailer ? (
          <div className="w-full md:w-160 h-60 md:h-108">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="w-full md:w-160 h-60 md:h-96 flex items-center justify-center bg-gray-200 rounded-lg">
            <p className="text-gray-500">No trailer available</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {movieData?.genres?.map((g: any) => (
          <Link key={g.id} href={`/genres?genre=${g.id}`}>
            <Badge variant="outline">{g.name}</Badge>
          </Link>
        ))}
      </div>
      <p className="text-gray-700 text-base">{movieData?.overview}</p>
      <MovieTeams />
      <Similiar />
    </div>
  );
}
