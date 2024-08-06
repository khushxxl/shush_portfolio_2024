"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { liveProjects, web3Projects } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { AppleIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Projects() {
  const [selectedProject, setselectedProject] = useState<any>(liveProjects[1]);
  const expandedProjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to expanded project when selectedProject changes
    if (selectedProject && expandedProjectRef.current) {
      expandedProjectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedProject]);

  return (
    <div
      ref={expandedProjectRef}
      id="projects"
      className="min-h-screen max-w-6xl flex justify-center  w-full flex-col items-center"
    >
      <div className="flex items-center">
        <p className="max-w-2xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
          my code projects
        </p>
        {/* <p className="text-4xl">{"< />"}</p> */}
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" lg:h-[50vh] relative max-w-sm flex  p-4 flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between mt-10 rounded-xl lg:max-w-4xl w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 "
        >
          <div
            onClick={() => setselectedProject(null)}
            className=" absolute  cursor-pointer top-6 right-10"
          >
            <XIcon />
          </div>
          <div className="w-[50%] flex justify-center">
            <Image
              className="rounded-xl"
              width={300}
              height={200}
              alt=""
              src={selectedProject?.img}
            />
          </div>
          <div className="w-[50%] space-y-5">
            <h1 className="text-4xl font-bold text-center lg:text-left">
              {selectedProject?.title}
            </h1>
            <h1 className="text-sm font-bold max-w-sm text-justify mb-5">
              {selectedProject?.dsc}
            </h1>

            <Link href={selectedProject?.deployedLink}>
              {selectedProject?.type == "Mobile App" ? (
                <div className="max-w-[400px] w-fit mt-5 min-w-max flex items-center py-2 px-6 bg-white text-white rounded-full">
                  <img
                    height={40}
                    width={40}
                    src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png"
                    alt=""
                  />
                  <p className="text-black font-medium ">Download</p>
                </div>
              ) : (
                <div className="max-w-[400px] w-fit mt-5 min-w-max flex items-center py-2 px-6 bg-white text-white rounded-full">
                  <p className="text-black font-medium ">View Deployed Link</p>
                </div>
              )}
            </Link>
          </div>
        </motion.div>
      )}

      <div className="w-full mt-10 flex justify-center lg:justify-start ">
        <div className="cursor-pointer relative w-fit p-2 border-[1px] rounded-3xl px-5">
          <p className="text-xs text-yellow-400 font-semibold">{"Web 3"}</p>
        </div>
      </div>
      <div className="mt-5 gap-x-4 gap-y-10 grid grid-cols-1 lg:grid-cols-3">
        {web3Projects.map((data, i) => {
          return (
            <ProjectCard
              key={i}
              title={data?.title}
              desc={data?.dsc}
              image={undefined}
              url={data?.deployedLink}
              onExpandClick={() => {
                setselectedProject(data);
              }}
            />
          );
        })}
      </div>

      <div className="w-full mt-10 flex justify-center lg:justify-start ">
        <div className="cursor-pointer relative w-fit p-2 border-[1px] rounded-3xl px-5">
          <p className="text-xs text-yellow-400 font-semibold">
            {"mobile apps"}
          </p>
        </div>
      </div>
      <div className="mt-5 gap-x-4 gap-y-10 grid grid-cols-1 lg:grid-cols-3">
        {liveProjects.map((data, i) => {
          return (
            <ProjectCard
              key={i}
              title={data?.title}
              desc={data?.shortDesc}
              image={undefined}
              url={data?.deployedLink}
              onExpandClick={() => {
                setselectedProject(data);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
