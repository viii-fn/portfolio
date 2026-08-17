import React from 'react';
import ProfilePic from '../assets/pfp.JPG';
import { Footer } from '../components/Footer';
import { elvis } from '../user';
import { Project } from '../components/Projects';


const HeroSection: React.FC = () => {
  return (
    <>
    {elvis.map(user => (
      <div className='my-10 mx-auto bg-[#16161685] w-[90%] rounded-4xl p-2.5 flex flex-col md:flex-row md:justify-between'>
        <div className="rounded-2xl md:w-[40%] md:ml-0">
          <img src={ProfilePic} alt={user.firstName} className='h-auto w-full rounded-3xl m-auto' />
        </div>
        <div className='m-auto rounded-full my-2.5 md:my-auto md:mr-0 h-5 w-30 md:w-5 md:h-50 bg-white animate-pulse'></div>
        <div className='w-full md:w-[40%] md:m-auto'>
          <h1 className='text-4xl text-center text-white tracking-widest uppercase font-thin font-sans md:text-7xl'>{user.firstName} {user.lastName}</h1>
          <div className='grid grid-cols-2 gap-3 mt-5'>
            {user.roles.map((role, index) => (
              <div key={index} className='p-2.5 rounded-4xl bg-[#2c2c2c] hover:text-white text-center  transition duration-300 border'>
                <h2 className='md:text-xl capitalize animate-pulse'>{role.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

const AboutSection: React.FC = () => {
  
  return (
    <>
    {elvis.map(user => (
      <div className='p-5 my-10 mx-auto bg-[#16161685] text-[#9b9b9b] w-[90%] rounded-4xl text-lg'>

          <h1 className='p-2.5 text-5xl text-white pb-2.5'>Hey there, I'm <b className='capitalize'>{user.firstName}</b></h1>
      <div className='md:grid md:grid-cols-2'>
        <div className='p-2.5 rounded-2xl my-5'> 
          <h2 className='font-thin'>
          I'm a self-taught <strong>{user.roles[0].title}</strong> and <strong>{user.roles[1].title}</strong> who is driven by deep passion and obssession for technology, terminals and smooth animations.
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='font-thin'>
            Code is my main canvas, and I work fluently in {user.roles[0].skills.map((skill, index) => (<strong key={index} className='capitalize'>{skill}, </strong>))} and modern frameworks to craft systems that feel <strong>fast, fluid, and future‑proof.</strong>
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='font-thin'>
            With <strong>over half a decade</strong> studying and understanding <strong>camera angles, creative sound design and color grading</strong>, I've developed exceptional skills with softwares like {user.roles[1].skills.map((skill, index) => (<strong key={index} className='capitalize'>{skill}, </strong>))} and many more to create captivating and realistic scenes from any environment at all.
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='font-thin'>
            Design isn’t an afterthought... it’s baked into my workflow from the first wireframe to the final pixel, so every <strong>animation, hover state, and transition</strong> serves a purpose and reinforces the brand story.
          </h2>
        </div>
      </div>
      </div>
    ))}
    </>
  )
}

export const WorkHistory: React.FC = () => {
  return(
    <>
    {elvis.map(user => (
      <div className='mx-auto w-[90%] my-10'>
        <h1 className='text-3xl my-7 text-white tracking-widest uppercase font-thin font-sans mb-7'>
          Work History
        </h1>
        <div className='rounded-2xl'>
          {user.roles.map(role => (
            role.job?.map((jobItem, index) => (
              <div key={index} className='bg-[#16161685] p-6 rounded-4xl border border-[#2c2c2c] hover:border-[#4c4c4c] transition duration-300 mb-5'>
                <div className='grid md:grid-cols-2 gap-5'>
                  <div>
                    <h2 className='text-3xl text-white font-semibold mb-2 capitalize'>{jobItem.title}</h2>
                    <p className='text-xl text-[#9b9b9b] capitalize mb-4'>{jobItem.company}</p>
                    <div className='text-sm text-[#7b7b7b] mb-4'>
                      <p>
                        {jobItem.startDate.toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                        {' - '}
                        {jobItem.endDate 
                          ? jobItem.endDate.toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long' 
                            })
                          : 'Present'
                        }
                      </p>
                    </div>
                  </div>
                  <div className='md:flex md:flex-col md:justify-between'>
                    <p className='text-[#9b9b9b] mb-4 font-light leading-relaxed'>{jobItem.description}</p>
                    {jobItem.social && jobItem.social.length > 0 && (
                      <div className='flex gap-3 flex-wrap'>
                        {jobItem.social.map((link, socialIndex) => (
                          <a
                            key={socialIndex}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='px-4 py-2 bg-[#2c2c2c] text-[#9b9b9b] rounded-full text-sm capitalize hover:text-white hover:bg-[#3c3c3c] transition duration-300 border border-[#3c3c3c]'
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    ))}
    </>
  )
}

export const Home: React.FC = () => {
  return(
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
      <WorkHistory />
      <Footer />
    </>
  )
}