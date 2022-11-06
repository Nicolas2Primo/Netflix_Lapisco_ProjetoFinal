import { useEffect, useState } from "react";
import axios from "axios";
import { IMAGE_HOST } from "../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieInfo from "./MovieInfo";

import "swiper/css/bundle";

const Row = ({ title, path }) => {
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieInfo, setmovieInfo] = useState({
    name: "",
    img: "",
    info: "",
    avg: null,
  });

  const getMovies = (_path) => {
    axios
      .get(`https://api.themoviedb.org/3${_path}`)
      .then((response) => {
        const data = response.data.results;
        setMovies(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies(path);
  }, [path]);

  return (
    <div className=" flex flex-col sticky">
      <span className="pl-4 font-bold text-xl dark:text-[#EFEFEF]">
        {title}
      </span>

      <Swiper
        spaceBetween={10}
        className={` w-[90vw] md:w-[97vw] `}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="py-3 w-20 h-[134px] md:w-40 md:h-[255px]"
            onClick={() => {
              setmovieInfo({
                name: movie.name || movie.title,
                img: movie.poster_path,
                info: movie.overview,
                avg: movie.vote_average.toFixed(2),
              });
            }}
          >
            <img
              key={movie.id}
              src={`${IMAGE_HOST}${movie.poster_path}`}
              alt={movie.title}
              className=" hover:scale-105 hover:cursor-pointer rounded-lg"
              onClick={openModal}
            />
          </SwiperSlide>
        ))}
        <MovieInfo
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          movie={movieInfo}
        ></MovieInfo>
      </Swiper>
    </div>
  );
};

export default Row;
