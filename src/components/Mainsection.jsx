// import React from "react";
import image1 from "/images/1.jpg";
import Buttons from "./Buttons";

const Mainsection = () => {
  return (
    <>
      <div
        className="flex flex-col  "
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "50vh",
          backdropFilter: blur(),
        }}
      >
        <div>
          <Buttons />
        </div>
        <div className="bg-white ">
          <h1 className="text-center text-2xl">
            IMPROVEMENT COACHING INSTITUTE
          </h1>
        </div>
      </div>
      {/* <div>
        <h1 className="text-5xl">WELCOME TO</h1>
        <h1>IMPROVEMENT COACHING</h1>
        <img src={image1} alt="" />
      </div>
      <div></div> */}
    </>
  );
};

export default Mainsection;
