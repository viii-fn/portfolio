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
                <h1 className='text-6xl animate-pulse text-white'>{role.years}+ years</h1> <br />
                <h2 className='md:text-xl'>of experience in {role.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

// const AboutSection: React.FC = () => {
  
//   return (
//     <>
//       <div className='p-5 my-10 mx-auto bg-[#16161685] shadow-[#ffffff20] text-[#9b9b9b] w-[90%] rounded-4xl md:grid md:grid-cols-2 text-lg'>
//         <div className='p-2.5 rounded-2xl my-5'>
//           <h1 className='text-5xl text-white pb-2.5'>Hey there</h1> 
//           <h2 className='font-thin'>
//           I'm {name}, a self-taught {roles.map((role, index) => ( <strong key={index}>{role.name}, </strong> ))} who is driven by deep passion and obssession for technology, terminals and smooth animations.
//           </h2>
//         </div>
//         <div className='p-2.5 rounded-2xl my-5'>
//           <h2 className='font-thin'>
//             Code is my main canvas, and I work fluently in <strong>C#, JavaScript, TypeScript</strong> and modern frameworks to craft systems that feel <strong>fast, fluid, and future‑proof.</strong>
//           </h2>
//         </div>
//         <div className='p-2.5 rounded-2xl my-5'>
//           <h2 className='font-thin'>
//             With <strong>over half a decade</strong> studying and understanding <strong>lighting and color grading</strong>, I've developed exceptional skills with softwares like <strong>Photoshop, Premier Rush, VSDC editor</strong> and many more to create captivating and realistic scenes from any environment at all.
//           </h2>
//         </div>
//         <div className='p-2.5 rounded-2xl my-5'>
//           <h2 className='font-thin'>
//             Design isn’t an afterthought—it’s baked into my workflow from the first wireframe to the final pixel, so every <strong>animation, hover state, and transition</strong> serves a purpose and reinforces the brand story.
//           </h2>
//         </div>
//       </div>
//     </>
//   )
// }

// const Project: React.FC = () => {
//   return(
//     <div className='mx-auto w-[90%] my-15'>
//       <h1 className='text-5xl'>
//         Recent Projects
//       </h1>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
//         {projects.map((project, index) => (
//           <div key={index} className='rounded-4xl bg-[#b64e4e85] relative h-fit pt-[57.6%] overflow-hidden'>
//             <div className='w-full absolute'>
//               <iframe src='http://localhost:5173/'></iframe>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export const Home: React.FC = () => {
  return(
    <>
      <HeroSection />
      <AboutSection />
      {/* <Project />
      <Footer /> */}
    </>
  )
}