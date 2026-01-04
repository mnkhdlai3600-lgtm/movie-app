import { Movie } from "@/app/components/Movies";
import { fetcherInput } from "@/utils/fetcherInput";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export default function Similiar() {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("query");
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/similar?language=en-US&page=1`,
    fetcherInput
  );
  const searchData = data?.results || [];

  return (
    <div>
      <strong className="text-lg">Similar Movies:</strong>
      <div className="grid grid-cols-5 gap-5">
        {searchData
          .map((films: Movie) => {
            return (
              <Link key={films.id} href={`/movieDetail?query=${films.id}`}>
                <div className="rounded-lg overflow-hidden shadow-lg ">
                  <img
                    className="object-cover object-center md:min-h-85 min-h-58.5"
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
                    <p className="">{films.original_title}</p>
                  </div>
                </div>
              </Link>
            );
          })
          .slice(0, 10)}
      </div>
    </div>
  );
}
