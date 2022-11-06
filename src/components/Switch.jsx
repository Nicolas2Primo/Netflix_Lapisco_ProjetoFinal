import { MdDarkMode } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const Switch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <MdDarkMode
          size={23}
          className="cursor-pointer text-black"
          onClick={() => {
            setTheme("dark");
          }}
        ></MdDarkMode>
      ) : (
        <BsFillLightbulbFill
          size={23}
          className="cursor-pointer text-[#EFEFEF]"
          onClick={() => {
            setTheme("light");
          }}
        ></BsFillLightbulbFill>
      )}
    </div>
  );
};

export default Switch;
