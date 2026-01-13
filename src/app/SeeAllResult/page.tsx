"use client";

import { Suspense } from "react";
import MovieResultsWrapper from "./components/MovieResultsWrapper";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MovieResultsWrapper />
    </Suspense>
  );
}
