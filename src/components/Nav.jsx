import Switch from "./Switch";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { useState } from "react";
import { routes } from "../data/api";

const Nav = ({ black }) => {
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex justify-between px-8 py-4 items-center fixed w-screen   md:gap-8 z-10`}
    >
      <div className="flex md:gap-8">
        <img
          src="/netflix.893e75f16bfa595cd8a2.png"
          alt=""
          className="max-w-[6rem] max-h-[1.6rem]"
        />
        <div className="hidden text-md dark:text-[#EFEFEF] gap-8 md:flex">
          {routes.map((content, index) => (
            <span
              key={index}
              className=" hover:scale-110 hover:font-bold hover:cursor-pointer"
            >
              {content}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Switch></Switch>

        <GiHamburgerMenu
          size={25}
          className="dark:text-[#EFEFEF] md:hidden"
          onClick={openModal}
        ></GiHamburgerMenu>
      </div>
      <Menu closeModal={closeModal} modalIsOpen={modalIsOpen}></Menu>
    </div>
  );
};

export default Nav;
