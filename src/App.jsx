import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import MultipleRows from "./components/MultipleRows";
import SwiperHead from "./components/SwiperHead";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" overflow-x-hidden pb-20 flex flex-col items-center ">
      <Nav handleScroll={handleScroll} scrollPosition={scrollPosition}></Nav>
      <div className="flex flex-col gap-6">
        <SwiperHead></SwiperHead>

        <MultipleRows></MultipleRows>
      </div>
    </div>
  );
}

export default App;
