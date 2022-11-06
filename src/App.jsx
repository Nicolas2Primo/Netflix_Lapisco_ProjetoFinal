import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import MultipleRows from "./components/MultipleRows";
import SwiperHead from "./components/SwiperHead";

function App() {
  return (
    <div className="bg-[#EFEFEF]  w-screen h-screen  dark:bg-[#141822] overflow-x-hidden overflow-y-auto pb-20">
      <Nav></Nav>
      <div className="flex flex-col gap-6">
        <SwiperHead></SwiperHead>
        <MultipleRows></MultipleRows>
      </div>
    </div>
  );
}

export default App;
