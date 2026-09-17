import React from 'react';
import ProfilePic from '../assets/pfp.JPG';
import BG from '../assets/hero.png';
import LogoPic from '../assets/logo.png';
import { Footer } from '../components/Footer';
import { elvis } from '../user';
import { Projects } from '../components/Projects';

const HeroSection: React.FC = () => {
  return (
    <>
      {elvis.map((user, idx) => (
        <div 
          key={user.id || idx}
          style={{ backgroundImage: `linear-gradient(to top, #000000 10%, transparent 100%), url(${BG})` }}
          className="mx-auto bg-cover bg-center bg-no-repeat min-h-screen w-full px-4 py-12 flex flex-col justify-center items-center text-white"
        >
          {/* Username */}
          <h1 className="text-2xl md:text-4xl text-center tracking-widest font-thin font-sans drop-shadow-lg">
            {user.userName} everywhere
          </h1>

          {/* Logo directly beneath Username */}
          <div className="mt-8 mb-10 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <img 
              src={LogoPic} 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Roles beneath Logo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl px-4">
            {user.roles.map((role, index) => (
              <div 
                key={index} 
                className="p-3 sm:p-4 rounded-3xl bg-[#2c2c2c]/80 backdrop-blur-xl hover:text-white text-center transition duration-300 border border-white/10"
              >
                <h2 className="text-lg md:text-xl capitalize animate-pulse font-light">
                  {role.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const AboutSection: React.FC = () => {
  return (
    <>
      {elvis.map((user, idx) => (
        <section 
          key={user.id || idx}
          className="p-6 sm:p-10 my-16 mx-auto bg-[#161616] text-[#9b9b9b] w-[90%] max-w-6xl rounded-3xl sm:rounded-4xl text-lg shadow-2xl border border-neutral-800"
        >
          {/* Header */}
          <h1 className="p-2.5 text-4xl sm:text-5xl text-white pb-6 font-thin">
            <i>Hey there, I'm </i><i className="capitalize font-normal">{user.firstName}</i>, <i className='text-xl'>(known as <i className='uppercase'>{user.nickName}</i> everywhere else)</i>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Profile Picture moved to About Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-neutral-700 shadow-xl">
                <img 
                  src={ProfilePic} 
                  alt={user.firstName} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

            {/* Organized Narrative Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#1f1f1f]/60 border border-neutral-800"> 
                <h2 className="font-thin leading-relaxed">
                  I'm a self-taught <strong>{user.roles[0].title}</strong> and <strong>{user.roles[1].title}</strong> who is driven by deep passion and obssession for technology, terminals and smooth animations.
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-[#1f1f1f]/60 border border-neutral-800">
                <h2 className="font-thin leading-relaxed">
                  Code is my main canvas, and I work fluently in {user.roles[0].skills.map((skill, index) => (<strong key={index} className="capitalize">{skill}, </strong>))} and modern frameworks to craft systems that feel <strong>fast, fluid, and future‑proof.</strong>
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-[#1f1f1f]/60 border border-neutral-800">
                <h2 className="font-thin leading-relaxed">
                  With <strong>over half a decade</strong> studying and understanding <strong>camera angles, creative sound design and color grading</strong>, I've developed exceptional skills with softwares like {user.roles[1].skills.map((skill, index) => (<strong key={index} className="capitalize">{skill}, </strong>))} and many more to create captivating and realistic scenes from any environment at all.
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-[#1f1f1f]/60 border border-neutral-800">
                <h2 className="font-thin leading-relaxed">
                  Architecture isn’t an afterthought... it’s baked into my workflow from the first schema design to the final API response, so every <strong>database query, data pipeline, and endpoint</strong> serves a purpose and reinforces system reliability.
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <HeroSection />
      <AboutSection />
      <Projects />
      <Footer />
    </div>
  );
};