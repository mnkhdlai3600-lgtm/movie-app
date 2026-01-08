import React from "react";
import { fetcherInput } from "@/utils/fetcherInput";
import { ChevronRight } from "lucide-react";
import useSWR from "swr";
import Link from "next/link";

export type Genre = {
  name: string;
  id: number;
};

export const GenreBUt = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/genre/movie/list?language=en`,
    fetcherInput
  );
  return (
    <div className="p-5 max-w-144.75">
      <div className="flex w-fit flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Genres</h1>
          <p>See lists of movies by genre</p>
        </div>
        <div className="border-b border-solid border-gray-300 w-full max-h-50 "></div>
        {data?.genres.map((genre: Genre) => {
          return (
            <Link
              href={`/genres?genre=${genre.id}`}
              key={genre.id}
              className="border border-solid border-gray-300 rounded-2xl text-[12px] font-semibold flex gap-2 justify-center items-center px-0.5 pr-1 pl-2.5"
            >
              {genre.name} <ChevronRight className="h-4 w-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
