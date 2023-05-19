// import React from "react";
import Navbar from "./Navbar";
// import Buttons from "./Buttons";
import Mainsection from "./Mainsection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videopage from "./Videopage";
import Blogs from "./Blogs";
import Support from "./Support";
import Achievement from "./Achievement";
import Alumni from "./Alumni";
import About from "./About";

const HomePage = () => {
  return (
    <div>
      <div className="flex relative">
        <div className=" w-[10%] fixed">
          <Navbar />
        </div>
        <BrowserRouter>
          <div className="w-[90%] bg-red-400 ml-auto">
            <Routes>
              <Route path="/" element={<Mainsection />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos" element={<Videopage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/support" element={<Support />} />
              <Route path="/achievement" element={<Achievement />} />
              <Route path="/alumni" element={<Alumni />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default HomePage;
