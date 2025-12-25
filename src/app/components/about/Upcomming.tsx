import { Movie } from "../Movies";

export const Upcoming = ({
  title,
  results,
}: {
  title: string;
  results: Movie[];
}) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-[24px] font-semibold">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-8">
        {results
          .map((films) => {
            return (
              <div
                key={films.id}
                className="rounded-lg overflow-hidden shadow-lg "
              >
                <img
                  className="object-cover object-center md:min-h-85 min-h-58.5"
                  src={` https://image.tmdb.org/t/p/original${films.backdrop_path}`}
                />
                <div className="bg-gray-200 h-19 md:h-22.5 p-2">
                  <div className="flex">
                    <p className="text-[12px] md:text-[14px] flex items-center]">
                      ⭐️{films.vote_average}
                    </p>
                    <p className="opacity-50 text-[12px] flex items-center">
                      /10
                    </p>
                  </div>
                  <p className="">{films.original_title}</p>
                </div>
              </div>
            );
          })
          .slice(0, 10)}
      </div>
    </div>
  );
};
