import React from "react";
import { contact } from "./api/hello/contact/Contact";

function HomePage() {
  return (
    <>
      <div className="h-50"></div>
      <div className="grid lg:grid-cols-2 justify-center items-center ">
        <div className="text-center mt-40">
          <h1 className="text-6xl font-bold">I'm a MERN STACK developer</h1>
          <p className="mt-14 lg:ml-10 ml-2 font-normal text-2xl">
            I have 1.5 year of experience building and desgining websites.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS. 
          </p>
          <div className=" justify-center items-center flex mt-6">
            <button className="bg-blue-600 text-white w-24 rounded-xl p-2">
              About Me
            </button>
          </div>
        </div>

        <div className="justify-center items-center flex">
          <div className="mt-20 lg:mt-40 rounded overflow-hidden shadow-lg justify-center items-center flex">
            <img
              className="hero-image-width"
              src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/MEAN-vs-MERN.png"
              alt="Sunset in the mountains"
            />
          </div>
        </div>
      </div>

      <div className="justify-center items-center flex mt-28 pb-10">
        <div style={{ width: "80%" }} className="bg-slate-200 h-30 pt-6">
          <div className="grid grid-cols-4  ">
            {contact.map((item, key) => (
              <div className="">
                <div className="justify-center items-center flex pb-6 cursor-pointer">
                  <img
                    style={{ width: "30%", height: "60px" }}
                    src={item.image}
                    alt=""
                  />
                  {/* <p className="text-center">{item.title}</p> */}
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
