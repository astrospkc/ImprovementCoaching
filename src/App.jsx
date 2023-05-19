import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainsection from "./components/Mainsection";
import About from "./components/About";
import Videopage from "./components/Videopage";
import Blogs from "./components/Blogs";
import Support from "./components/Support";
import Achievement from "./components/Achievement";
import Alumni from "./components/Alumni";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="flex relative">
            <div className=" w-[10%] fixed">
              <Navbar />
            </div>

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
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
