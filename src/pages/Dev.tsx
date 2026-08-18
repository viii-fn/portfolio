import React from 'react';
import { elvis } from '../user';
import { Footer } from '../components/Footer';
import { History } from '../components/History';

const LanguagesSection: React.FC = () => {
  return (
    <>
      {elvis.map(user => (
        <div className='mx-auto w-[90%] my-10'>
          <h1 className='text-3xl text-white tracking-widest uppercase font-thin font-sans mb-7'>Languages</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {user.roles[0].skills.map((skill, index) => (
              <div key={index} className='bg-[#16161685] p-5 rounded-4xl text-center hover:bg-[#2c2c2c] transition duration-300 border border-[#2c2c2c]'>
                <p className='text-lg text-white capitalize font-semibold'>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const FrameworksSection: React.FC = () => {
  const frameworks = ['WebApi', '.NET', 'React', 'Next', 'Supabase', 'Blazor'];

  return (
    <div className='mx-auto w-[90%] my-10'>
      <h1 className='text-3xl text-white tracking-widest uppercase font-thin font-sans mb-7'>Frameworks & Tools</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        {frameworks.map((framework, index) => (
          <div key={index} className='bg-[#16161685] p-5 rounded-4xl text-center hover:bg-[#2c2c2c] transition duration-300 border border-[#2c2c2c]'>
            <p className='text-lg text-white font-semibold'>{framework}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Dev: React.FC = () => {
  return(
    <>
      <LanguagesSection />
      <FrameworksSection />
      <History />
      <Footer />
    </>
  )
}