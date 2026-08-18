import { elvis } from '../user';

export const Media: React.FC = () => {
  return(
    <>
    {elvis.map(user => (
      <div className='mx-auto w-[90%] my-15'>
        <h1 className='text-3xl my-7 text-white tracking-widest uppercase font-thin font-sans mb-7'>
          Clips i've worked on
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {user.cinematography.map((project, index) => (
            <div className='bg-[#16161685] p-3 rounded-4xl w-full h-full '>
              <h2 className='text-xl text-white'>{project.description}</h2>
              <div key={index} className='relative h-fit overflow-hidden origin-top-left aspect-video my-3'>
                {/*{project.media.map((clip, index) => (
                  {clip.isImage?}                  
                ))}             */}   
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