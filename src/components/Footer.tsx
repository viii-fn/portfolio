export const Footer: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();

  const name: string = 'Elvis';
  const lastName: string = 'Irhaye';
  
  return(
    <>
      <div className='w-[90%] rounded-4xl bg-[#16161685] mx-auto p-5 mb-30 text-[#9b9b9b] text-lg flex flex-col md:flex-row md:justify-between'>
        &copy; {year} {name} {lastName}.
        <div className='w-fit flex flex-row gap-3 animate-pulse'>
          <a className='hover:text-white transition duration-300' href="https://x.com/viii-fn" target="_blank" rel="noopener noreferrer">X</a>
          <a className='hover:text-white transition duration-300' href="https://github.com/viii-fn" target="_blank" rel="noopener noreferrer">Github</a>
          <a className='hover:text-white transition duration-300' href="https://instagram.com/viii-fn" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className='hover:text-white transition duration-300' href="https://tiktok.com/viii_fn" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a className='hover:text-white transition duration-300' href="https://wa.me/+2348160575048" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </>
  )
}