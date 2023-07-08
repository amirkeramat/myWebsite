import Typewriter from "typewriter-effect";
import { RightOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { PER_RESUME, EN_RESUME } from "./env/env";
const Intro = () => {
  const downloadHandler = () => {
    Swal.fire({
      title: "What Language do you want to download?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "English",
      denyButtonText: `Persian`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        location.href = EN_RESUME;
      } else if (result.isDenied) {
        location.href = PER_RESUME;
      }
    });
  };
  return (
    <div className='pb-20 p-2 md:p-8  flex flex-col h-full items-start justify-center after:absolute after:content-[""] after:top-0 after:right-0 after:w-[300px] after:h-full after:bg-gradient-to-tr after:hidden after:lg:block after:from-lime-700 after:via-lime-500  after:to-lime-400 after:bg-green-300'>
      <div className="flex items-center ps-0 md:ps-[50px] mt-[50px] order-2 md:order-1  text-2xl md:text-4xl font-serif">
        <RightOutlined className="text-zinc-500" />
        <Typewriter
          options={{
            strings: ["Hi There...", "Im Amir Keramat"],
            autoStart: true,
            loop: true,
            cursor: "_",
          }}
        />
      </div>
      <p
        className="text-2xl order-3 md:order-2 py-4 md:text-4xl w-full md:w-[350px] ps-0 md:ps-[50px] text-transparent bg-gradient-to-tr from-lime-700 via-lime-300 bg-clip-text to-lime-100"
        data-aos="zoom-in-left"
        data-aos-duration="700"
      >
        A Web Developer & A FrontEnd Lover
      </p>
      <p
        className="text-2xl order-4 md:order-3 py-4 w-full md:w-[500px] ps-0 md:ps-[50px] text-transparent bg-gradient-to-tr from-zinc-400 via-zinc-300 bg-clip-text to-zinc-200"
        data-aos="zoom-in-left"
        data-aos-duration="700"
      >
        After graduating from university and not being interested in the field I
        had studied, I decided to follow my passion and I hope to achieve my
        dreams in this way.
      </p>
      <div className="flex flex-wrap w-full justify-center md:justify-start items-center order-1 md:order-4">
        <img
          data-aos="zoom-in-left"
          data-aos-duration="700"
          src="/code.png"
          className="w-full md:w-[50%] h-[300px] hidden md:block md:order-1"
          alt=""
        />
        <img
          data-aos="zoom-in-right"
          data-aos-duration="700"
          src="/my.png"
          className=" w-[400px] h-[400px] z-40 order-2"
          alt=""
        />
      </div>

      <div className="w-full h-[5px] bg-gradient-to-r from-lime-500 via-red-500 to-blue-500 order-5"></div>
      <span className="flex py-10 w-full justify-center md:justify-start ps-0 md:ps-10 order-last flex-wrap">
        <span className="px-0 text-lg md:flex items-center whitespace-nowrap me-2 hidden">
          <p className="text-4xl pe-2 ">+2</p>
          Years Experience
        </span>
        <span className="px-0 text-lg  items-center whitespace-nowrap hidden md:flex ">
          <p className="text-4xl pe-2 ">+10</p>
          Projects
        </span>
        <span className="w-[200px] h-[50px] relative bg-lime-500 ms-10">
          <button
            onClick={downloadHandler}
            className="bg-white w-[210px] h-[50px] text-gray-950 font-serif absolute bottom-2 right-2"
          >
            Download Resume
          </button>
        </span>
      </span>
    </div>
  );
};

export default Intro;
