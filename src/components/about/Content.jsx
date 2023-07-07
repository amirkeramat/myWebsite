import Typewriter from "typewriter-effect";
import { RightOutlined } from "@ant-design/icons";
import { abilities, aboutMe } from "../../constants/abilities";
import Abilities from "./abilities/Abilities";
const Content = () => {
  return (
    <div className='w-full h-full flex pb-10 md:pb-0 flex-wrap md:flex-nowrap items-stretch'>
      <div className='bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-800 md:w-[300px] w-full flex flex-col items-center'>
        <h6 className='text-center p-3 rounded mt-6 bg-zinc-950 text-zinc-50 text-3xl'>
          Amir Keramat
        </h6>
        <img src='./aboutMe.jpg' className='h-[400px] rounded mix-blend-luminosity my-5' alt='' />
        <p className='text-transparent bg-gradient-to-tr from-lime-700 via-lime-300 bg-clip-text to-lime-100 text-3xl text-center mt-20'>
          Ready to discuss your project?
        </p>
        <p className='text-transparent bg-gradient-to-tr font-serif from-zinc-300 via-zinc-200 bg-clip-text to-zinc-100 text-3xl text-center mt-10'>
          Let's super-charge your business today!
        </p>
        <span className='w-[200px] h-[50px] relative bg-lime-500 ms-10 my-20 flex justify-center'>
          <button className='bg-white w-[210px] h-[50px] text-gray-950 font-serif absolute bottom-2 right-2'>
            Get a Free Price Quote{" "}
          </button>
        </span>
      </div>
      <div className='flex flex-col'>
        <div className="bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-800 p-10">
          <div className='flex flex-col py-4'>
            <h1 className='text-4xl font-sans font-bold text-white'>
              I'm Specialized in
            </h1>
            <div className='flex items-center order-2 md:order-1  text-2xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300'>
              <RightOutlined className='text-zinc-500' />
              <Typewriter
                options={{
                  strings: [
                    "Front-End Development",
                    "Modern Frameworks",
                    "Front-End Design",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                }}
              />
            </div>
          </div>
          {abilities.map((ability) => (
            <Abilities
              key={ability.id}
              title={ability.title}
              items={ability.items}
            />
          ))}
        </div>
        <div className='text-zinc-100 p-4'>
          {aboutMe.map((item) => (
            <div key={item.id} className='p-4 text-xl'>
              <h4>{item.title}</h4>
              <p className='text-2xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-200'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
