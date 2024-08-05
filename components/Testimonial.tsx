import { testimonials } from "@/utils/data";
import { User } from "lucide-react";
import React from "react";

function Testimonial() {
  return (
    <div className="min-h-screen max-w-6xl justify-center  w-full flex-col ">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-2">
        <p className="max-w-2xl  bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
          see what my clients have to say{"  "}
        </p>
        <p className="text-4xl">{" 💜 "}</p>
      </div>

      <div className="grid mt-20 grid-cols-1 lg:grid-cols-3 place-items-center place-content-center  gap-x-3 gap-y-10">
        {testimonials.map((data, i) => {
          return (
            <div
              className="p-4 min-h-[300px] shadow-xl max-w-sm border border-gray-700 rounded-xl bg-slate-900"
              key={i}
            >
              <div className="flex items-center space-x-4">
                <User />
                <p className="text-lg font-semibold">{data.name}</p>
              </div>

              {/* <p>{data?.work}</p> */}

              <p className="text-sm mt-2">{data.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
