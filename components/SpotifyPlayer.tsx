import Image from "next/image";
import React, { useRef } from "react";
import SpotifyPlayerNPM from "react-spotify-web-playback";
import { BorderBeam } from "./ui/border-beam";
import Link from "next/link";

function SpotifyPlayer({ data }: { data: any }) {
  // console.log(data);
  const audioRef = useRef<any>(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };
  const songTrack = data;
  console.log(songTrack);
  // console.log("Spotify Player =", data?.items[0]?.track);

  // const token: any = sessionStorage.getItem("access_token");
  return (
    <div className="border-2 relative flex flex-col lg:flex-row items-center  lg:max-w-xl  border-gray-500 rounded-xl lg:w-full p-6  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 ">
      <div className="flex lg:absolute items-center underline space-x-3 lg:top-4 lg:right-10 ">
        <Link target="_blank" href={`${data?.external_urls.spotify}`}>
          <Image
            height={30}
            src={require("../app/assets/spotify_logo.png")}
            alt=""
          />
        </Link>
      </div>
      <div className="mt-6">
        <Image
          alt={data?.name}
          height={200}
          width={200}
          src={data?.album?.images[0]?.url}
          // src={
          //   "https://i.scdn.co/image/ab67616d0000b2731d93bb16bf3025587d001f45"
          // }
        />
      </div>
      <div className="w-full text-center mt-5">
        <p className=" font-bold tracking-wider">{data?.name}</p>
        {/* <p className=" font-bold tracking-wider">{"Please Please Please"}</p> */}
      </div>
      {/* <SpotifyPlayerNPM
        styles={{ bgColor: "black", color: "white", trackNameColor: "white" }}
        play
        initialVolume={0.1}
        token={token}
        uris={[songTrack]}
      /> */}
      {/* <BorderBeam duration={13} borderWidth={3} /> */}
    </div>
  );
}

export default SpotifyPlayer;
