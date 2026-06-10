import { elvis } from "../user";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiTiktok,
} from 'react-icons/si';

export const Footer: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();

  const socialIcons: Record<string, React.ElementType> = {
    github: SiGithub,
    x: SiX,
    instagram: SiInstagram,
    tiktok: SiTiktok,
  };
  
  return(
    <>
    {elvis.map(user => (
      <div className='w-[90%] rounded-4xl bg-[#16161685] mx-auto p-5 mb-30 text-[#9b9b9b] text-lg flex flex-col md:flex-row md:justify-between capitalize'>
        <h1 className='text-3xl font-thin'>Let's Get In Touch</h1>
        <div className='w-fit flex flex-row gap-3 animate-pulse my-5 md:my-0'>
          {user.social.map((platform, index) => {
            const Icon = socialIcons[platform.title]; 
            return (
              <a key={index} className='hover:text-white transition duration-300 capitalize' href={platform.url} target="_blank" rel="noopener noreferrer">
                {Icon && <Icon size={30} />}
              </a>
            );
          })}
        </div>
        &copy; {year} {user.firstName} {user.lastName}.
      </div>
    ))}
    </>
  )
}