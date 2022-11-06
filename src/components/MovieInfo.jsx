import Modal from "react-modal";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";
import { IMAGE_HOST } from "../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

Modal.setAppElement("#root");

const MovieInfo = ({ closeModal, modalIsOpen, movie }) => {
  const swiperIndex = [0, 1];
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="MovieInfo"
      overLayClassName="modal-overlay"
      className="modal-content outline-none "
    >
      <div className="flex items-center justify-center w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm backdrop-opacity-90">
        <div className="absolute px-4 py-2 h-84 max-w-[300px] rounded-2xl bg-[#EFEFEF] dark:bg-[#141822] flex flex-col items-center">
          <div className="flex flex-row-reverse items-end w-full ">
            <AiOutlineClose
              size={30}
              onClick={closeModal}
              className="dark:text-[#EFEFEF] text-[#141822] hover:cursor-pointer "
            ></AiOutlineClose>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-52 h-[370px] text-center"
          >
            <SwiperSlide className="hover:cursor-pointer">
              <span className="font-bold text-lg  dark:text-[#EFEFEF] text-[#141822] text-center">
                {movie.name}
              </span>
              <img
                src={`${IMAGE_HOST}${movie.img}`}
                alt=""
                className=" w-52 h-84 rounded-2xl "
              />
            </SwiperSlide>
            <SwiperSlide className="h-full w- justify-center items-center flex hover:cursor-pointer overflow-y-auto ">
              <span className="font-bold text-[11px] dark:text-[#EFEFEF] text-[#141822] text-center">
                {movie.info}
              </span>
            </SwiperSlide>
          </Swiper>

          <div className="px-3 w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <AiFillStar color="gold" size={25}></AiFillStar>
              <span className="font-bold text-lg  dark:text-[#EFEFEF] text-[#141822] text-center">
                {movie.avg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieInfo;
