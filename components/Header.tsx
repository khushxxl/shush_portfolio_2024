"use client";
import {
  Github,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NotebookPen,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderDropDown from "./HeaderDropDown";

function Header() {
  const pathname = usePathname();
  if (pathname == "/") {
    return (
      <div className=" sticky max-w-6xl top-0 z-50 mx-auto  md:px-10 px-3 py-3 md:py-10 bg-slate-950 border-gray-600 flex items-center justify-between ">
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer">
            <h1 className="text-lg font-mono font-semibold tracking-wide ml-5 text-gray-100">
              khushhh {"🚀"}
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex items-center space-x-4">
            {/* <a target="_blank" href="https://github.com/khushxxl">
              <GithubIcon className=" text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/khushcodes/">
              <LinkedinIcon className=" text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a target="_blank" href="https://twitter.com/khushaal_04">
              <TwitterIcon className=" text-gray-400 hover:text-white cursor-pointer" />
            </a> */}
            <a target="_blank" href="https://www.linkedin.com/in/khushcodes/">
              <Button variant={"secondary"}>
                <MailIcon className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </a>
            <Link target="_blank" href="https://khushcodez.hashnode.dev/">
              <Button variant={"secondary"}>
                <NotebookPen className="mr-2 h-4 w-4" />
                Blogs
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex">
            <HeaderDropDown />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

{
  /* <Image
          className=""
          alt=""
          src={"https://i.ibb.co/b5TnCfn/IMG-4160.png"}
          width={50}
          height={50}
        /> */
}
