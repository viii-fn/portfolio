export const Footer: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();

  const name: string = 'Elvis';
  const lastName: string = 'Irhaye';
  
  return(
    <>
      <div className='w-[90%] rounded-4xl bg-[#16161685] mx-auto p-5 mb-40 text-[#9b9b9b] text-xl flex flex-col md:flex-row md:justify-between'>
        &copy; {year} {name} {lastName}.
        <div className='w-fit flex flex-col md:flex-row'>
          <a className='mx-3 mt-5 md:mt-0 hover:text-white transition duration-300' href="https://x.com/viii_fn" target="_blank" rel="noopener noreferrer">X</a>
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