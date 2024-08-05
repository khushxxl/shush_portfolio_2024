"use client";
import BookMeeting from "@/components/BookMeeting";
import ConnectPage from "@/components/ConnectPage";
import Hero from "@/components/Hero";
import MySaaS from "@/components/MySaaS";
import Projects from "@/components/Projects";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import Testimonial from "@/components/Testimonial";
import {
  authorize,
  getCurrentlyPlaying,
  getRecentlyPlayedTracks,
  getToken,
} from "@/utils/lib";
import { SignInButton, useUser } from "@clerk/nextjs";
import { LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex  w-[100%] mx-auto   flex-col space-y-20   items-center justify-center ">
      {/* <div onClick={authorize}>authorise</div> */}
      <Hero />
      <MySaaS />
      <Projects />
      <Testimonial />
      <ConnectPage />
    </main>
  );
}
