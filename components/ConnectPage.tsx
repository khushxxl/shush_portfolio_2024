import { LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import BookMeeting from "./BookMeeting";

function ConnectPage() {
  return (
    <div className="max-w-6xl flex  w-full justify-center items-center flex-col ">
      <p className="max-w-2xl   bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
        connect with me easily here
      </p>
      <div className="flex mt-8 mb-10 items-center space-x-8 ">
        <Link target="_blank" href={"https://twitter.com/khushaal_04"}>
          <div className="flex  items-center text-sm cursor-pointer ">
            <Twitter size={20} fill="#2B9BF0" color="#2B9BF0" />
          </div>
        </Link>
        <p className="text-3xl">/</p>
        <Link target="_blank" href={"https://www.linkedin.com/in/khushcodes/"}>
          <div className="flex  items-center text-sm cursor-pointer ">
            <LinkedinIcon fill="#2B9BF0" color="#2B9BF0" />
          </div>
        </Link>
        <p className="text-3xl">/</p>
        <BookMeeting />
      </div>
      <div className=" space-y-5 mb-10">
        <p className="text-gray-500 text-xs">Khushaal Choithramani © 2024</p>
      </div>
    </div>
  );
}

export default ConnectPage;
