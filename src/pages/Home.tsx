import React from 'react';
import ProfilePic from '../assets/pfp.JPG';
import { Footer } from '../components/Footer';
import { elvis } from '../user';


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
              <div key={index} className='p-2.5 rounded-4xl text-[#9b9b9b] bg-[#2c2c2c] hover:text-white text-center  transition duration-300 border'>
                <h1 className='text-4xl animate-pulse text-white mb-3'>{role.years}+ years</h1>
                <h2 className='md:text-xl'>of experience in {role.career}</h2>
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
      <div className='p-5 my-10 mx-auto bg-[#16161685] text-[#9b9b9b] w-[90%] rounded-4xl md:grid md:grid-cols-2 text-lg'>
        <div className='p-2.5 rounded-2xl my-5'>
          <h1 className='text-5xl text-white pb-2.5'>Hey there</h1> 
          <h2 className='font-thin'>
          I'm <b className='capitalize'>{user.firstName}</b>, a self-taught {user.roles.map((role, index) => (<strong key={index}>{role.title}, </strong>))} who is driven by deep passion and obssession for technology, terminals and smooth animations.
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='font-thin'>
            Code is my main canvas, and I work fluently in {user.roles[0].skills.map((skill, index) => (<strong key={index} className='capitalize'>{skill}, </strong>))} and modern frameworks to craft systems that feel <strong>fast, fluid, and future‑proof.</strong>
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='font-thin'>
            With <strong>over half a decade</strong> studying and understanding <strong>camera angles and color grading</strong>, I've developed exceptional skills with softwares like {user.roles[1].skills.map((skill, index) => (<strong key={index} className='capitalize'>{skill}, </strong>))} and many more to create captivating and realistic scenes from any environment at all.
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='font-thin'>
            Design isn’t an afterthought—it’s baked into my workflow from the first wireframe to the final pixel, so every <strong>animation, hover state, and transition</strong> serves a purpose and reinforces the brand story.
          </h2>
        </div>
      </div>
    ))}
    </>
  )
}

const Project: React.FC = () => {
  return(
    <>
    {elvis.map(user => (
      <div className='mx-auto w-[90%] my-15'>
        <h1 className='text-3xl my-7'>
          Things I've built
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {user.projects.map((project, index) => (
            <div className='bg-[#16161685] p-3 rounded-4xl w-full h-full '>
              <h2 className='text-xl text-white'>{project.title}</h2>
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

const Work: React.FC = () => {
  return(
    <>
    {elvis.map(user => (
      <div className='px-5 py-1 my-10 mx-auto bg-[#16161685] text-[#9b9b9b] w-[90%] rounded-4xl text-lg'>
        <h1 className='text-3xl my-7 text-white'>
          Work History
        </h1>
        <div className='rounded-2xl'>
          {user.roles.map(role => (
            role.job?.map((work, index) => (
              <div key={index} className='bg-black px-5 py-10 rounded-2xl my-5 grid md:grid-cols-2 gap-5'>
                <div>
                  <h1 className='capitalize text-2xl mb-4'>{work.title}</h1>
                  <h1 className='capitalize mb-4 text-white text-2xl'>@ <u>{work.company}</u></h1>
                  <h1 className='capitalize'><i>"{work.description}"</i></h1>
                </div>
                <div className='md:border-l md:pl-5 pb-2.5'>
                  <h1>
                    <i>{work.startDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})} - {work.endDate === null ? "Current" : work.endDate?.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</i>
                  </h1>
                  <ul className='mt-10'>
                    {work.social.map((link, index) => (
                      <a key={index} href={link.url} className='w-fit'>
                        <li key={index} className='capitalize animate-pulse my-3'>- {link.title}</li>
                      </a>
                    ))}
                  </ul>
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
      <Project />
      <Work />
      <Footer />
    </>
  )
}