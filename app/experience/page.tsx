import React from "react";
import { experience } from "../api/hello/experience/ExperienceData";

function page() {
  return (
    <div>
      <div className="grid   justify-center items-center text-center">
        <h1 className="mt-24 text-4xl font-bold">The Technologies that I worked with</h1>
      </div>
      <div className="grid md:grid-cols-3  justify-center items-center">
       
        {experience.map((item, key) => (
            <div className="mt-14">
<div className="max-w-sm rounded   overflow-hidden shadow-lg">
    <div className="justify-center items-center flex">
    <img className="w-36 h-36" src={item.image} alt="Sunset in the mountains"/>
    </div>
          
          <div className="py-4">
            <div className="font-bold text-xl mb-2 text-center">{item.title}</div>
           
          </div>
        
        </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default page;
