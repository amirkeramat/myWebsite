import tw from 'tailwind-styled-components'

export const Container = tw.div`
    relative dark min-h-screen w-full  flex justify-center lg:px-4 xl:px-8 bg-black
`

export const TopSep = tw.div`
fixed top-0 left-0 z-50 bg-black w-full md:block lg:h-4 xl:h-8
`

export const BottomSep = tw.div`
fixed bottom-0 left-0 z-50 bg-black w-full md:block lg:h-4 xl:h-8
`

export const RouterContainer = tw.div`
relative w-full max-w-screen-xl 
`;

export const Router = tw.div`
relative  bg-gradient-to-tr from-zinc-900 via-zinc-900 to-zinc-800  w-full lg:pt-4 xl:pt-8  rounded h-full`;
