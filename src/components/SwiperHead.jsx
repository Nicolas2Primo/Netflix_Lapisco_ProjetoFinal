import categories from "../data/api";
import { useState, useEffect } from "react";
import axios from "axios";
import { IMAGE_HOST } from "../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";

const SwiperHead = () => {
  const [movies, setMovies] = useState([]);

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
    getMovies(categories[0].path);
  }, [categories[0].path]);
  return (
    <div className=" sticky">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
        allowTouchMove={false}
        slideToClickedSlide={true}
        className="  w-[100vw] h-[58vw] sm:h-[60vw] md:h-[60vw] flex  "
      >
        {movies
          .filter((movie, index) => index < 3)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className=" flex items-center justify-center">
                <span className="fixed text-white text-md sm:text-3xl lg:py-56 lg:text-6xl lg:px-20 sm:py-16 md:text-5xl font-bold  w-full h-full flex items-end py-7 md:py-28 px-3">
                  {movie.name || movie.title}
                </span>
                <img
                  src={`${IMAGE_HOST}${movie.backdrop_path}`}
                  alt=""
                  className=""
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperHead;
