const ServiceBox = ({item}) => {
  return (
    <div className='w-full bg-zinc-100 flex flex-col'>
      <div className='w-full  h-[200px] bg-gradient-to-br from-lime-200 via-lime-400 to-lime-600 flex flex-col p-6 space-y-2'>
        <i className='text-5xl text-blue-500'>{item.icon}</i>
        <h4 className='text-3xl font-sans font-semibold'>{item.title}</h4>
      </div>
      <div className='h-[280px] p-6 space-y-2'>
        <p className='h-[50px] text-zinc-500'>{item.desc}</p>
        <ul className='p-8 font-semibold  list-disc marker:text-zinc-400'>
          {item.list.map((list) => (
            <li  key={list.id}>{list.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceBox;
