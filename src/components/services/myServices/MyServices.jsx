import {myServicesItems} from '../../../constants/services'
import { Link } from 'react-router-dom';
const MyServices = () => {
    const {title_1,title_2,desc,list} = myServicesItems
  return (
    <div className='space-y-5 p-2 flex flex-col '>
      <h6 className='text-zinc-100 text-4xl font-bold'>{title_1}</h6>
      <h5 className='text-transparent bg-clip-text bg-gradient-to-tr from-lime-300 via-lime-400 to-lime-500 text-4xl font-semibold'>
        {title_2}
      </h5>
      {desc.map((item) => (
        <div className='space-y-2' key={item.id}>
          <h4 className='text-2xl text-zinc-50'>{item.title}</h4>
          <p className='text-xl text-zinc-400'>{item.content}</p>
        </div>
      ))}
      {list.map((item) => (
        <div className='space-y-4' key={item.id}>
          <h4 className='text-2xl text-zinc-50'>{item.title}</h4>
          <ul className='list-disc marker:text-zinc-600 text-zinc-400 p-4'>
            {item.items.map((i) => (
              <li key={i.id}>{i.content}</li>
            ))}
          </ul>
        </div>
      ))}
      <span className='w-[200px] h-[50px] relative bg-lime-500 ms-10 my-20 flex justify-center'>
        <button className='bg-white w-[210px] h-[50px] text-gray-950 font-serif absolute bottom-2 right-2'>
          <Link to={"/contact"}> Get a Free Price Quote </Link>
        </button>
      </span>
    </div>
  );
}

export default MyServices