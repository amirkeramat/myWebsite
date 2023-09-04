import RateBox from "./rateBox/RateBox";
const Abilities = ({ title, items }) => {
  return (
    <div className='w-full p-2 '>
      <span className='flex items-center child:mx-2'>
        <div className='w-[2px] h-[20px] bg-lime-500'></div>
        <p className='text-zinc-100 text-lg'>{title}</p>
      </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm'>
        {items.map((item) => (
          <RateBox
            key={item.id}
            icon={item.icon}
            title={item.title}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
