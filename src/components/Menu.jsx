import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { routes } from "../data/api";

Modal.setAppElement("#root");

const Menu = ({ closeModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overLayClassName="modal-overlay"
      className="modal-content outline-none"
    >
      <div className="w-screen h-screen bg-[#EFEFEF] dark:bg-[#141822] flex flex-row-reverse py-1 px-1">
        <AiOutlineClose
          size={30}
          onClick={closeModal}
          className="dark:text-[#EFEFEF]"
        ></AiOutlineClose>
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-7 dark:text-[#EFEFEF]">
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
    </Modal>
  );
};

export default Menu;
