import { elvis } from '../user';

export const Projects: React.FC = () => {
  return(
    <>
    {elvis.map(user => (
      <div className='mx-auto w-[90%] my-15'>
        <h1 className='text-3xl my-7 text-white tracking-widest uppercase font-thin font-sans mb-7'>
          Things I've built
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {user.projects.map((project, index) => (
            <div className='bg-[#161616] p-3 rounded-4xl w-full h-full '>
              <h2 className='text-xl text-white text-center'>{project.title}</h2>
              <div key={index} className='relative h-fit overflow-hidden origin-top-left aspect-video my-3'>
                <iframe src={project.url} style={{height: '400%', width: '400%'}} className='w-full h-full scale-[0.25] origin-top-left pointer-events-none'></iframe>
              </div>
              <p className='text-[#9b9b9b] text-sm'>{project.description}</p>
              <a href={project.url}>
                <div className='mt-5 p-2.5 rounded-2xl border font-thin w-fit text-[#9b9b9b] hover:text-white transition'>Preview</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    ))}
    </>
  )
}