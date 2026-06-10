import React from 'react';
import { elvis } from '../user';
import { Footer } from '../components/Footer';

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
  const frameworks = ['Node', '.NET', 'React', 'Next', 'Supabase', 'Express'];

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

const WorkExperienceSection: React.FC = () => {
  return (
    <>
      {elvis.map(user => (
        <div className='mx-auto w-[90%] my-10'>
          <h1 className='text-3xl text-white tracking-widest uppercase font-thin font-sans mb-7'>Work History</h1>
          <div className='space-y-5'>
            {user.roles[0].job?.map((jobItem, index) => (
              <div key={index} className='bg-[#16161685] p-6 rounded-4xl border border-[#2c2c2c] hover:border-[#4c4c4c] transition duration-300'>
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
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const Dev: React.FC = () => {
  return(
    <>
      <LanguagesSection />
      <FrameworksSection />
      <WorkExperienceSection />
      <Footer />
    </>
  )
}