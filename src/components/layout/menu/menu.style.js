import tw from "tailwind-styled-components";

export const Container = tw.div`
fixed  right-0 bottom-0  z-40 md:sticky md:h-[50vh] h-[50px] md:top-[25vh] bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-700 md:w-[50px] w-full text-white flex flex-row md:flex-col items-center justify-evenly
`;

export const Icon = tw.i`
relative  hover:after:hidden  hover:after:content-[attr(after-dynamic-value)] hover:after:w-[100px] hover:after:h-[20px] hover:after:absolute hover:after:md:flex hover:after:justify-center hover:after:items-center hover:after:py-5 hover:after:rounded  hover:after:top-0 hover:after:bg-blue-700 text-3xl hover:after:text-xl h-full w-full  justify-center items-center hover:bg-blue-500 transition-all duration-500  hover:after:transition-all hover:after:duration-300 hover:after:animate-pulse
aria-[current=page]:text-blue-400
${(p) => (p.$exLink ? "bg-zinc-600 hidden md:flex" : "")}
${(p) => (p.$language ? "hover:after:-left-28" : "hover:after:left-14")}
`;
