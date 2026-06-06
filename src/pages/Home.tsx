import React from 'react';
import ProfilePic from '../assets/pfp.JPG';

const name: string = 'Elvis';
const lastName: string = 'Irhaye';
const roles = [
  { name: 'software engineer', years: 4 },
  { name: 'photographer', years: 6 },
  { name: 'videographer', years: 3 },
  { name: 'sound designer', years: 1 }
];

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='my-10 mx-auto bg-[#16161685] w-[90%] rounded-4xl p-2.5 flex flex-col md:flex-row md:justify-between'>
        <div className="rounded-2xl md:w-[40%] md:ml-0">
          <img src={ProfilePic} alt={name} className='h-auto w-full rounded-3xl m-auto' />
        </div>

        <div className='mt-4 md:h-fit w-full md:w-[50%] md:m-auto'>
          <h1 className='text-4xl text-center text-white tracking-widest uppercase font-thin font-sans md:text-7xl md:mb-9 mb-11'>{name} {lastName}</h1>
          <div className='grid grid-cols-2 gap-3'>
            {roles.map((role, index) => (
              <div key={index} className='p-2.5 rounded-4xl text-[#9b9b9b] bg-[#2c2c2c] hover:text-white text-center transition duration-300 border'>
                <h1 className='text-6xl animate-pulse text-white'>{role.years}+</h1>
                <h2 className='md:text-xl'>experience as a <br /> {role.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const AboutSection: React.FC = () => {
  
  return (
    <>
      <div className='p-5 my-10 mx-auto bg-[#16161685] shadow-[#ffffff20] text-[#9b9b9b] w-[90%] rounded-4xl md:grid md:grid-cols-2'>
        <div className='p-2.5 rounded-2xl my-5'>
          <h1 className='text-5xl text-white pb-2.5'>Hey there</h1>
          <h2 className='text-xl font-thin'>
          I'm {name}, a self-taught <strong>{roles[0].name}</strong>, <strong>{roles[1].name}</strong>, <strong>{roles[2].name}</strong>, and <strong>{roles[3].name}</strong> who is driven by deep passion and obssession for technology, terminals and smooth animations.
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='text-xl font-thin'>
            Code is my main canvas, and I work fluently in <strong>C#, JavaScript, TypeScript</strong> and modern frameworks to craft systems that feel <strong>fast, fluid, and future‑proof.</strong>
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='text-xl font-thin'>
            With <strong>over half a decade</strong> studying and understanding <strong>lighting and color grading</strong>, I've developed exceptional skills with softwares like <strong>Photoshop, Premier Rush, VSDC editor</strong> and many more to create captivating and realistic scenes from any environment at all.
          </h2>
        </div>
        <div className='p-2.5 rounded-2xl my-5'>
          <h2 className='text-xl font-thin'>
            Design isn’t an afterthought—it’s baked into my workflow from the first wireframe to the final pixel, so every <strong>animation, hover state, and transition</strong> serves a purpose and reinforces the brand story.
          </h2>
        </div>
      </div>
    </>
  )
}

const FooterSection: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();

  return(
    <>
      <div className='w-fit rounded-4xl bg-[#16161685] mx-auto p-5 mb-40'>
        <div className='text-[#9b9b9b] text-xl w-fit flex flex-col md:flex-row'>
          &copy; {year} {name} {lastName}.
          <a className='mx-3 mt-5 md:mt-0 hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className='mx-3 hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">Github</a>
          <a className='mx-3 hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className='mx-3 hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a className='mx-3 hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">FaceBook</a>
          <a className='mx-3 hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </>
  )
}

export const Home: React.FC = () => {
  return(
    <>
      {/* <HeroSection /> */}
      <AboutSection />
      <FooterSection />
    </>
  )
}