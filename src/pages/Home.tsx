import React from 'react';
import ProfilePic from '../assets/pfp.JPG';

const name: string = 'Elvis';
const lastName: string = 'Irhaye';
const roles: string[] = ['Software Engineer', 'Photographer', 'Videographer', 'Sound Designer'];

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='my-5 mx-auto bg-[#161616] w-[90%] rounded-4xl p-2.5 flex flex-col md:flex-row md:justify-between'>
        <div className="rounded-2xl md:w-[40%] md:ml-0">
          <img src={ProfilePic} alt={name} className='h-auto w-full rounded-3xl m-auto' />
        </div>

        <div className="mt-4 md:h-fit w-full md:w-[50%] md:m-auto">
          <h1 className='text-4xl text-center md:text-7xl mb-9'>{name} {lastName}</h1>
          <div className='grid grid-cols-2 gap-3'>
            {roles.map((role: string, index) => (
              <h1 key={index} className='p-2.5 rounded-4xl text-base md:text-xl text-[#9b9b9b] bg-[#2c2c2c] hover:text-white text-center transition duration-300'>{role}</h1>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const Home: React.FC = () => {
  return(
    <>
      <HeroSection />
    </>
  )
}