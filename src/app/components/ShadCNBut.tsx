"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenreBUt } from "./GenreBUt";
import { ChevronDown } from "lucide-react";

export function MovieGenre() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border border-gray-200">
          {" "}
          <ChevronDown /> Genres
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-gray-50" align="start">
        <GenreBUt />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
