import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Scroll from "./Component/Scroll/Scroll";
function App() {
  const [data, setData] = useState();

  return (
    <>
      <Scroll />
      <header className=" bg-[#020D18] px-2 py-2 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 w-[99.99%]">
        <Navbar />
      </header>
      <main className={`min-h-[1400px] bg-cover bg-center`}>
        <Outlet />
      </main>
      <footer className="w-full text-lg text-center py-2 bg-slate-800 mt-16">
        mymovie-project 2024
      </footer>
    </>
  );
}

export default App;
