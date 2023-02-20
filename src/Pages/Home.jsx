import Logo from 'components/Icons/Logo'

const Home = () => {
  return (
    <>
      <body className='text-white'>
        <header className='bg-primary'>
          <div className='flex items-center justify-between container py-6'>
            <Logo />
            <nav className='flex items-center gap-x-7'>
              <a href='#' className='hover:underline font-semibold'>Download</a>
              <a href='#' className='hover:underline font-semibold'>Nitro</a>
              <a href='#' className='hover:underline font-semibold'>Discover</a>
              <a href='#' className='hover:underline font-semibold'>Safety</a>
              <a href='#' className='hover:underline font-semibold'>Support</a>
              <a href='#' className='hover:underline font-semibold'>Blog</a>
              <a href='#' className='hover:underline font-semibold'>Careers</a>
            </nav>
            <button className='bg-white py-2 px-4 text-black text-xl rounded-3xl'>Login</button>
          </div>
        </header>
      </body>
    </>
  )
}

export default Home
