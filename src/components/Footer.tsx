import { elvis } from "../user";

export const Footer: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();
  
  return(
    <>
    {elvis.map(user => (
      <div className='w-[90%] rounded-4xl bg-[#16161685] mx-auto p-5 mb-30 text-[#9b9b9b] text-lg flex flex-col md:flex-row md:justify-between'>
        &copy; {year} {user.firstName} {user.lastName}.
        <div className='w-fit flex flex-row gap-3 animate-pulse'>
          {user.social.map((platform, index) => (
            <a key={index} className='hover:text-white transition duration-300' href={platform.url} target="_blank" rel="noopener noreferrer">{platform.title}</a>
          ))}
        </div>
      </div>
    ))}
    </>
  )
}