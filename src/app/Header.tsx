"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Film, Moon, Search } from "lucide-react";
import { InputValue } from "./components/InputValue";
import { MovieGenre } from "./components/ShadCNBut";

export const Header = () => {
  const [openInput, setOpenInput] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-5 py-4.75 md:px-20 md:py-2.75">
        <Link href="/" className={`${openInput ? "hidden" : "block"}`}>
          <div className="flex gap-2 items-center">
            <Film className="w-4.25 h-4.25" />
            <p className="text-indigo-700 text-[14px] font-bold italic">
              Movie Z
            </p>
          </div>
        </Link>
        <div className="hidden md:flex gap-3">
          <MovieGenre />
          <InputValue />
        </div>
        <div className="flex gap-3 ">
          <div className={`md:hidden ${openInput ? "block" : "hidden"}`}>
            <MovieGenre />
          </div>
          <Button
            variant="outline"
            className={`w-9 h-9 border-gray-300 md:hidden ${
              openInput ? "hidden" : "block"
            }`}
            onClick={() => setOpenInput(true)}
          >
            <Search />
          </Button>
          {openInput && (
            <div className="md:hidden px-5 pb-4 w-fit">
              <InputValue />
            </div>
          )}

          <Button
            variant="outline"
            className={`w-9 h-9 border-gray-300" ${
              openInput ? "hidden" : "block"
            }`}
          >
            <Moon />
          </Button>
        </div>
      </div>
    </>
  );
};
