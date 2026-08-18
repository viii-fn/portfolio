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
            <div className='bg-[#161616] p-3 rounded-4xl w-full h-full '>
              <h2 className='text-xl text-white text-center'>{project.description}</h2>
              <div key={index} className='relative h-fit overflow-hidden origin-top-left aspect-video my-3 flex flex-row gap-3 overflow-x-scroll'>
                {project.media.map((clip, index) => (
                  <div key={index} className='h-full overflow-x-scroll flex-shrink-0 h-full w-fit'>
                    {clip.isImage ? <img src={clip.path} className='h-full' /> : <video key={index} src={clip.path} controls></video>}
                  </div> 
                ))}                
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
    </>
  )
}