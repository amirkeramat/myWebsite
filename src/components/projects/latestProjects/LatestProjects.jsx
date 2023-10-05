import { StarOutlined,GithubFilled,StarFilled } from "@ant-design/icons";
const LatestProjects = ({ item }) => {
  const { images, link, title, desc, tech, duration, role, live,github } = item;
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 duration-500 justify-center bg-zinc-800 items-center p-4 hover:drop-shadow-2xl hover:shadow-lime-600">
      {live ? (
        <a
          href={link}
          className="absolute top-2 right-4 text-yellow-400 text-2xl flex flex-col animate-pulse"
        >
          <p className="text-2xl">Live</p>
          <StarFilled className="text-lg absolute -top-3 -right-2" />
        </a>
      ) : null}
      <a
        href={github}
        className="absolute top-0 left-2 text-yellow-400 text-2xl"
      >
        <GithubFilled />
      </a>
      <div className="flex flex-wrap py-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            className="w-[240px] h-[240px] p-2 object-contain"
          />
        ))}
      </div>
      <div className="flex flex-col space-y-4 ">
        <h1 className="text-2xl text-zinc-100">{title}</h1>
        <p className="text-zinc-400 text-xl">{desc}</p>
        <h4 className="text-blue-500">Technologies</h4>
        <div className="flex flex-wrap">
          {tech.map((item) => (
            <p
              className="flex justify-center whitespace-nowrap w-[150px] items-center bg-gradient-to-tl from-lime-200 via-lime-400 to-lime-500 text-lime-950 drop-shadow-lg  m-2 py-2"
              key={item.id}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2">
          <span>
            <h6 className="text-blue-500">Duration</h6>
            <p className="text-zinc-100">{duration}</p>
          </span>
          <span>
            <h6 className="text-blue-500">Role</h6>
            <p className="text-zinc-100">{role}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
