import { CarouselPlugin } from "./Carousel";
import { Popular } from "./about/Popular";
import { Top } from "./about/Top";
import { Upcoming } from "./about/Upcomming";
export type Movie = {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  id: number;
};

type Results = {
  results: Movie[];
};

const movieAPi = async (category: "popular" | "upcoming" | "top_rated") => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${process.env.NEXT_PUBLIC_TDMB_KEY}`,
      },
    }
  );
  const data = (await response.json()) as Results;
  console.log(data);
  return data;
};

export const Movies = async () => {
  const { results: popularResults } = await movieAPi("popular");
  const { results: topRatedResults } = await movieAPi("top_rated");
  const { results: upcomingResults } = await movieAPi("upcoming");

  return (
    <div className="flex justify-center flex-col">
      <CarouselPlugin results={popularResults} />
      <div className="p-5 md:px-20 mb-12.5">
        <Upcoming title="Upcomming" results={upcomingResults} />
        <Top title="Top Rated" results={topRatedResults} />
        <Popular title="Popular" results={popularResults} />
      </div>
    </div>
  );
};
