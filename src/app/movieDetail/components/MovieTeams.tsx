import { fetcherInput } from "@/utils/fetcherInput";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

export default function MovieTeams() {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("query");
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/credits?language=en-US`,
    fetcherInput
  );
  const creditsData = data?.results || [];

  const directors =
    creditsData?.crew?.filter((c: any) => c.job === "Director") || [];
  const writers =
    creditsData?.crew?.filter((c: any) =>
      ["Writer", "Screenplay", "Story"].includes(c.job)
    ) || [];
  const stars = creditsData?.cast?.slice(0, 5) || [];
  return (
    <div className="space-y-1 text-sm text-gray-700">
      <div>
        <strong>Director:</strong>{" "}
        {directors.map((d: any) => d.name).join(", ")}
      </div>
      <div>
        <strong>Writers:</strong> {writers.map((w: any) => w.name).join(", ")}
      </div>
      <div>
        <strong>Stars:</strong> {stars.map((s: any) => s.name).join(", ")}
      </div>
    </div>
  );
}
