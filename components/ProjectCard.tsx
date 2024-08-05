import { ExpandIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  desc,
  image,
  url,
  onExpandClick,
}: {
  title: string;
  desc: string;
  image: any;
  url: string;
  onExpandClick?: any;
}) => {
  return (
    <div className="bg-[#1C1C1C] flex relative items-center justify-between p-5 rounded-xl  md:max-w-lg max-w-sm w-full">
      <ExpandIcon
        onClick={onExpandClick}
        className=" absolute right-4 top-4 cursor-pointer"
        size={18}
      />
      <div className=" flex  items-center  p-2 w-fit">
        {image && (
          <div className="bg-white cursor-pointer p-3">
            <Image
              alt=""
              src={image}
              width={500}
              height={100}
              className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
            />
          </div>
        )}
        <div className="ml-3">
          <p className="font-bold">{title}</p>
          <p className="text-gray-500 max-w-xs ">{desc}</p>
        </div>
      </div>
      <div>
        {url && (
          <Link target="_blank" href={url}>
            <div className="font-semibold border-[1px] text-xs p-3 px-6 rounded-xl text-center flex items-center">
              <p>Visit</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
