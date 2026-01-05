"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Play } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Movie } from "./Movies";
import Link from "next/link";

type CarouselPluginProps = {
  results: Movie[];
};

export const CarouselPlugin = ({ results }: CarouselPluginProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {results.map((movie) => {
          return (
            <CarouselItem key={movie.id} className="md:relative ">
              <Link href={`/movieDetail?query=${movie.id}`}>
                {" "}
                <img
                  className="w-screen md:max-h-150 object-cover object-center overflow-clip"
                  src={` https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
                <div className="hidden md:flex md:absolute md:z-50 md:top-[30%] md:right-[55%] md:left-[9%] md:text-white md:mix-blend-difference  flex-col gap-4 top-">
                  <p className="text-[16px]">Now Playing</p>
                  <p className="text-4xl font-bold">{movie.original_title}</p>
                  <div className="flex">
                    <p className="font-semibold text-[18px]">
                      ⭐️{movie.vote_average}
                      <span className="font-normal opacity-50 text-[16px]">
                        /10
                      </span>
                    </p>
                  </div>
                  <p className="font-normal text-[12px]">{movie.overview}</p>
                  <Button
                    variant={"outline"}
                    className="bg-white text-black w-36.25 h-10md:"
                  >
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
                <div className="text-black md:hidden flex flex-col gap-4 p-5 md:p-0 ">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[14px]">Now Playing</p>
                      <p className="text-2xl font-bold">
                        {movie.original_title}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="font-semibold text-[18px]">
                        ⭐️{movie.vote_average}
                        <span className="font-normal opacity-50 text-[16px]">
                          /10
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-[12px] ">{movie.overview}</p>
                  <Button
                    variant={"outline"}
                    className="bg-black text-white w-36.25 h-10md:  border-none"
                  >
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="md:absolute z-20 hidden md:flex text-gray-300 left-10" />
      <CarouselNext className="md:absolute z-20 hidden md:flex text-gray-300 right-10" />
    </Carousel>
  );
};
