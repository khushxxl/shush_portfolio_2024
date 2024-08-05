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
import { Linkedin, MailIcon, MenuIcon, TwitterIcon } from "lucide-react";

function HeaderDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-950">
        <DropdownMenuItem className="space-x-2">
          <TwitterIcon /> <span>Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <Linkedin /> <span>Linkedin</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="space-x-2">
          <MailIcon /> <span>Hire Me</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderDropDown;
