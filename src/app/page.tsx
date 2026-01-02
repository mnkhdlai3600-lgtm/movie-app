import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { Movies } from "./components/Movies";
export default function Home() {
  return (
    <div className="flex flex-col items-center inter-">
      <div className={` w-screen ${inter.variable}`}>
        <Movies />
      </div>
    </div>
  );
}
