import React from "react";
// import { Project } from '../api/projects/Project'
import Link from "next/link";
import { Projects } from "@/types/Project";
import Project from "../api/projects/data.json"


async function page() {
 

  return (
    <div>
      <div className="grid grid-cols-3 ">
        {Project.map((item, key) => (
          <div className="justify-center items-center flex">
            <div className="max-w-sm rounded-xl shadow-xl border overflow-hidden hover:scale-105 transition-all mt-24 cursor-pointer">
              <div className="font-bold text-xl mb-2 text-center">
                {item.heading}
              </div>
              <p className="font-bold text-sm mb-2 text-center">{item.title}</p>
              <Link href={""}>
                <img
                  className="w-full h-60"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
              </Link>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
