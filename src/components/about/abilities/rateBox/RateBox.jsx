const RateBox = ({ rate, icon, title }) => {
  console.log([...Array(rate).keys()]);
  return (
    <span className='flex items-center justify-evenly   p-2'>
      <span className="flex items-center">
        <i className={`${icon} text-zinc-500 text-4xl mx-2`}></i>
        <p className='text-zinc-100 w-[75px] whitespace-nowrap mx-2'>{title}</p>
      </span>
        <div className='flex w-[75px] '>
          {[...Array(rate).keys()].map((key, index) => (
            <p
              key={index}
              className='w-[15px] border  border-zinc-950 h-[15px] bg-blue-500'></p>
          ))}
          {[...Array(5 - rate).keys()].map((key, index) => (
            <p
              key={index}
              className='w-[15px] border border-zinc-950 bg-zinc-700 h-[15px]'></p>
          ))}
        </div>
    </span>
  );
};

export default RateBox;
