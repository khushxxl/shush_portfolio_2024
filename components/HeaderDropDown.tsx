import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  MailIcon,
  MenuIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

function HeaderDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-950">
        <DropdownMenuItem>
          <Link
            target="_blank"
            className="flex space-x-2 cursor-pointer"
            href={"https://twitter.com/khushaal_04"}
          >
            <TwitterIcon /> <span>Twitter</span>
          </Link>
        </DropdownMenuItem>
        <Link target="_blank" href={"https://www.linkedin.com/in/khushcodes/"}>
          <DropdownMenuItem className="space-x-2 cursor-pointer">
            <Linkedin /> <span>Linkedin</span>
          </DropdownMenuItem>
        </Link>
        <Link target="_blank" href={"https://github.com/khushxxl"}>
          <DropdownMenuItem className="space-x-2 cursor-pointer">
            <Github /> <span>Github</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="space-x-2 cursor-pointer">
          <MailIcon /> <span>Hire Me</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderDropDown;
