"use client";

import { fetcherInput } from "@/utils/fetcherInput";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { Movie } from "../components/Movies";
import Link from "next/link";
import { GenreBUt } from "../components/GenreBUt";

export default function page() {
  const searchParams = useSearchParams();
  const genreIds = searchParams.get("genre");
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/discover/movie?language=en&with_genres=${genreIds}&page=1`,
    fetcherInput
  );
  const genreData = data?.results || [];
  console.log(genreData);

  return (
    <div className="flex flex-col gap-8 justify-center items-start mx-20 mt-13 mb-86">
      <h1 className="font-semibold text-3xl">Search results</h1>
      <GenreBUt />
      <div className="flex justify-between gap-11">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {genreData.map((films: Movie) => {
              return (
                <Link key={films.id} href={`/movieDetail?query=${films.id}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg ">
                    <img
                      className="object-cover object-center "
                      src={` https://image.tmdb.org/t/p/original${films.poster_path}`}
                    />
                    <div className="bg-gray-200 h-19 md:h-22.5 p-2">
                      <div className="flex">
                        <p className="text-[12px] md:text-[14px] flex items-center">
                          ⭐️{films.vote_average}
                        </p>
                        <p className="opacity-50 text-[12px] flex items-center">
                          /10
                        </p>
                      </div>
                      <p>{films.original_title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-l-2 border-gray-100 "></div>
      </div>
    </div>
  );
}
