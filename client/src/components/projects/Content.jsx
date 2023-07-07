import ProjectBox from './projectBox/ProjectBox'
import {projectItems,latestProjectsItems} from '../../constants/projects'
import LatestProjects from './latestProjects/LatestProjects';
const Content = () => {
  return (
    <div className='p-10 space-y-10 h-full'>
      <h1 className='text-3xl text-zinc-100'>My Open-Source Projects</h1>
      <p className='text-xl text-zinc-400'>
        Discover my most popular open-source projects on Github.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projectItems.map((item) => (
          <ProjectBox key={item._id} item={item} />
        ))}
      </div>
      <h1 className='text-3xl text-zinc-100'>Latest Projects</h1>
      <p className='text-xl text-zinc-400'>
        I have transformed ideas into remarkable digital products.
      </p>
      {latestProjectsItems.map(item=>(
        <LatestProjects key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default Content