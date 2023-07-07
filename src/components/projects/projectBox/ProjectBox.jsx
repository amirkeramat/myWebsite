import { Link } from "react-router-dom";
const ProjectBox = ({ item }) => {
  const { title, desc, content, href } = item;
  return (
    <div className='flex flex-col space-y-5 bg-gradient-to-tr from-lime-400 via-lime-500 to-lime-600 h-[250px] group'>
      <Link to={href}>
        <div className='h-[200px] p-8'>
          <h6 className="text-blue-500 text-2xl font-serif">{title}</h6>
          <p>{content}</p>
        </div>
        <div className='w-full h-[50px] bg-zinc-100 px-8 py-2 duration-500 group-hover:bg-zinc-800 group-hover:text-zinc-100'>
          {desc.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ProjectBox;
