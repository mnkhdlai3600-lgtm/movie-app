import { Film, Moon, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-4.75 md:px-20 md:py-2.75">
      <div className=" gap-2 flex justify-between items-center">
        <Film className=" w-4.25 h-4.25 " />
        <p className="text-indigo-700 text-[14px] font-bold">Movie Z</p>
      </div>
      <div className="hidden md:flex gap-3">
        <Button
          variant={"outline"}
          className="bg-white text-black border-gray-300"
        >
          <ChevronDown /> Genre
        </Button>
        <Input className="w-94.75  border-gray-300"></Input>
      </div>
      <div className="flex gap-3">
        {" "}
        <Button variant="outline" className="w-9 h-9 border-gray-300 md:hidden">
          <Search />
        </Button>
        <Button variant="outline" className="w-9 h-9 border-gray-300">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
