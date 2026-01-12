import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-indigo-500 flex md:px-10 md:pt-20 pb-26 mt-12.75 justify-between flex-col md:flex-row gap-8 md:gap-0 px-5 py-10">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Film className="text-white" />
          <p className="text-white font-bold ">Movie Z</p>
        </div>
        <p className="text-white text-[14px]">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex md:gap-24 gap-12">
        <div>
          <p className="text-[14px] text-white">Contact Information</p>
          <div className="flex justify-center items-center gap-3">
            <Mail className="text-white w-4 h-4" />
            <div>
              <p className="text-[14px] text-white">Email:</p>
              <p className="text-[14px] text-white">support@movieZ.com</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Phone className="text-white w-4 h-4" />
            <div>
              <p className="text-[14px] text-white">Email:</p>
              <p className="text-[14px] text-white">support@movieZ.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-white">Follow us </p>
          <div className="flex gap-3 md:flex-row flex-col">
            <a
              className="text-white font-medium text-[14px] md:text-[16px]"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
            <a
              className="text-white font-medium text-[14px] md:text-[16px]"
              href="https://www.instagram.com/"
            >
              Instagram
            </a>
            <a
              className="text-white font-medium text-[14px] md:text-[16px]"
              href="https://www.twitter.com/"
            >
              Twitter
            </a>
            <a
              className="text-white font-medium text-[14px] md:text-[16px]"
              href="https://www.youtube.com/"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
