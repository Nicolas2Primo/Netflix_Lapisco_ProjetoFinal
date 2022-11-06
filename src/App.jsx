import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import MultipleRows from "./components/MultipleRows";
import SwiperHead from "./components/SwiperHead";

function App() {
  return (
    <div className=" overflow-x-hidden pb-20">
      <Nav></Nav>
      <div className="flex flex-col gap-6">
        <SwiperHead></SwiperHead>
        <MultipleRows></MultipleRows>
      </div>
    </div>
  );
}

export default App;
