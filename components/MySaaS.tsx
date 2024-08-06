import Image from "next/image";
import React from "react";
import { BorderBeam } from "./ui/border-beam";
import Link from "next/link";

function MySaaS() {
  const saasData = [
    {
      title: "Simple JS Code",
      website: "simplejscode.com",
      desc: ` A hand-picked collection of more than 150+ JS code snippets that's
            constantly updated, and curated for you to include it in your next
            project.`,
      deployedLink: "https://www.simplejscode.com/",
      image: require("../app/assets/sjc.png"),
    },
    {
      title: "The Pay Page",
      website: "thepaypage.me",
      desc: `Create Payment Integration with Beautiful Pages in 3 minutes`,
      deployedLink: "https://thepaypage.me",
      image: require("../app/assets/paypage_ss.png"),
    },
  ];
  const SAASComponent = ({
    title,
    website,
    desc,
    isReverse,
    image,
    deployedLink,
  }: {
    title: string;
    website: string;
    desc: string;
    isReverse?: boolean;
    image: any;
    deployedLink: string;
  }) => {
    return (
      <div
        className={`mt-20 flex flex-col  ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } space-y-5 lg:space-y-0  items-center justify-between  w-full`}
      >
        <div>
          <Link target="_blank" href={deployedLink}>
            <Image
              className="rounded-xl w-[400px] lg:w-[500px]"
              alt=""
              src={image}
            />
          </Link>
          <Link target="_blank" href={deployedLink}>
            <div className="">
              <p className="text-center mt-2 text-blue-500 underline cursor-pointer">
                {website}
              </p>
            </div>
          </Link>
        </div>
        <div>
          <p className="max-w-2xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
            {title}
          </p>
          <p className="text-center mt-5 max-w-lg">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen h-full my-14 max-w-6xl flex  w-full justify-center flex-col items-center">
      <div className="flex items-center">
        <p className="max-w-2xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
          my saas products{" "}
        </p>
        <p className="text-4xl">💰</p>
      </div>

      {saasData.map((data, i) => {
        return (
          <SAASComponent
            key={i}
            website={data?.website}
            desc={data?.desc}
            title={data?.title}
            isReverse={i % 2 != 0 ? true : false}
            image={data?.image}
            deployedLink={data?.deployedLink}
          />
        );
      })}
    </div>
  );
}

export default MySaaS;
