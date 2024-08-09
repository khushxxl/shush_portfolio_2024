"use client";
import {
  Cross,
  LinkedinIcon,
  LucideYoutube,
  Twitter,
  XIcon,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import SpotifyPlayer from "./SpotifyPlayer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  getCurrentlyPlaying,
  getRecentlyPlayedTracks,
  getToken,
} from "@/utils/lib";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { web3Projects } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import { BorderBeam } from "./ui/border-beam";
import BookMeeting from "./BookMeeting";

function Hero() {
  const [codeVerifier, setcodeVerifier] = useState("");
  const [recentlyPlayedTracks, setrecentlyPlayedTracks] = useState<any>();
  const [currentlyPlayingTrack, setcurrentlyPlayingTrack] = useState<any>();

  const defaultSpotifyTrack = {
    name: "Tejano Blue",
    album: {
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273765c3f0a6ce3d22bc5485010",
        },
      ],
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/383EQ8PDAlqzSe4ayyn2Ct",
    },
  };
  const urlParams = useSearchParams();
  const code: string | null = urlParams.get("code");

  useEffect(() => {
    setcodeVerifier(sessionStorage.getItem("code_verifier") || "");
  }, []);

  useEffect(() => {
    if (code) {
      getToken(code);
    }
  }, [code]);
  useEffect(() => {
    fetchRecentlyPlayedTracks();
    fetchCurrentlyPlayingTrack();
  }, []);

  const fetchRecentlyPlayedTracks = async () => {
    await getRecentlyPlayedTracks()
      .then((data) => {
        setrecentlyPlayedTracks(data);
      })
      .catch((e) => {
        setcurrentlyPlayingTrack(defaultSpotifyTrack);
      });
  };

  const workTypes: any = ["Web 3", "Web", "Apps", "AI"];

  const [selectedWork, setselectedWork] = useState<
    "Web 3" | "Web" | "Apps" | "AI" | null
  >();
  const fetchCurrentlyPlayingTrack = async () => {
    await getCurrentlyPlaying()
      .then((data) => setcurrentlyPlayingTrack(data))
      .catch((e) => setcurrentlyPlayingTrack(defaultSpotifyTrack));
  };

  const ProjectSideBar = () => {
    return (
      <div className="space-y-10  w-full">
        <XIcon
          onClick={() => setselectedWork(null)}
          className="text-gray-600 cursor-pointer"
        />
        {web3Projects.map((data) => {
          return (
            <ProjectCard
              title={data?.title}
              desc={""}
              image={undefined}
              url={data?.deployedLink}
            />
          );
        })}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={` w-[100%] items-center  max-w-full  flex justify-evenly ${
        selectedWork ? "flex-row" : "flex-col"
      }`}
    >
      <div className="flex flex-col w-[60%]  items-center space-y-10 justify-center">
        <p className="max-w-2xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
          a guy who loves to build cool mobile and web projects and turn them
          into saas
        </p>
        <div className="flex items-center space-x-8 mt-4">
          <Link target="_blank" href={"https://twitter.com/khushaal_04"}>
            <Twitter size={20} fill="#2B9BF0" color="#2B9BF0" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/khushcodes/"}
          >
            <LinkedinIcon fill="#2B9BF0" color="#2B9BF0" />
          </Link>
          <Link target="_blank" href={"https://www.youtube.com/@codewithkhush"}>
            <Youtube fill="red" size={28} color="white" />
          </Link>
        </div>

        <SpotifyPlayer data={defaultSpotifyTrack} />
        {/* <div className="flex items-center space-x-10">
          {workTypes.map((type: any, i: number) => {
            return (
              <div
                onClick={() => setselectedWork(workTypes)}
                key={i}
                className="cursor-pointer relative w-fit p-2 border-[1px] rounded-3xl px-5"
              >
                <p className="text-xs text-gray-400">{type}</p>
              </div>
            );
          })}
        </div> */}
        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0  items-center lg:space-x-4">
          <BookMeeting />

          <Link href={"/#projects"}>
            <div className="bg-slate-800 font-semibold p-3 rounded-xl text-white px-6">
              see my work?
            </div>
          </Link>
        </div>
      </div>

      {selectedWork && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-[35%]"
        >
          <ProjectSideBar />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Hero;
