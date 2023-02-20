import Download from 'components/Icons/Download'
import Logo from 'components/Icons/Logo'

import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'

const Home = () => {
  return (
    <>
      <body className='text-white'>
        {/* Mobile Menu */}
        <div className='top-0 right-0 fixed bg-white w-0 z-50 h-full transition-all duration-200'>
          <div className='p-5'>
            <div className='flex items-center justify-between text-black'>
              {/* logo */}
              <Logo />
              {/* Close Icon */}
              <IoCloseOutline className='h-6 w-6 cursor-pointer' />
            </div>
            <ul className='text-black pt-10 flex flex-col gap-y-5'>
              <li className='bg-[#f6f6f6] text-primary cursor-pointer py-2 px-5 font-medium rounded'>
                Home
              </li>
              <li className='py-2 px-5 font-medium hover:bg-[#f6f6f6] hover:text-primary cursor-pointer rounded'>
                Nitro
              </li>
              <li className='py-2 px-5 font-medium hover:bg-[#f6f6f6] hover:text-primary cursor-pointer rounded'>
                Safety
              </li>
              <li className='py-2 px-5 font-medium hover:bg-[#f6f6f6] hover:text-primary cursor-pointer rounded'>
                Support
              </li>
              <li className='py-2 px-5 font-medium hover:bg-[#f6f6f6] hover:text-primary cursor-pointer rounded'>
                Blog
              </li>
            </ul>
            <button className='px-4 py-2 rounded-full bg-primary text-white bottom-10 left-8 absolute flex items-center gap-x-1 hover:shadow-lg shadow-black/30 transition duration-200'>
              <Download />
              Download for Windows
            </button>
          </div>
        </div>
        {/* Header */}
        <header className='bg-primary'>
          <div className='flex items-center justify-between container py-6'>
            {/* logo */}
            <Logo />
            {/* navbar */}
            <nav className='hidden lg:flex items-center gap-x-10'>
              <a href='#' className='navLink'>Download</a>
              <a href='#' className='navLink'>Nitro</a>
              <a href='#' className='navLink'>Safety</a>
              <a href='#' className='navLink'>Support</a>
              <a href='#' className='navLink'>Blog</a>
              <a href='#' className='navLink'>Careers</a>
            </nav>
            {/* login button */}
            <div className='flex items-center gap-x-4'>
              <button className='btn-sm'>Login</button>
              <IoMenuOutline className='text-white w-12 h-12 block lg:hidden cursor-pointer' />
            </div>
          </div>
        </header>
        {/* Main */}
        <main>
          {/* hero section */}
          <section className="relative bg-primary bg-[url('/hero/1.svg')] bg-no-repeat bg-center">

            <img
              src='/hero/2.svg'
              alt=''
              className='absolute bottom-0 right-0 xl:-left-60 w-[65%] xl:w-[40%] block md:hidden xl:block'
            />

            <img
              src='/hero/3.svg'
              alt=''
              className='absolute bottom-0 md:right-0 xl:-right-56 md:-[95%] w-[40%] hidden md:block'
            />

            <div className='flex flex-col gap-8 items-start xl:items-center xl:justify-center container h-[84vh] xl:h-[78vh] pt-16 md:pt-20 xl:pt-0'>
              <h1 className='text-3xl lg:text-4xl xl:text-6xl tracking-widest'>
                IMAGINE A PLACE...
              </h1>
              <p className='text-sm lg:text-lg xl:text-xl tracking-wider leading-normal text-justify z-20'>
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. <br className='hidden md:block' />
                Where just you and a handful of friends can spend time together. A
                place that makes it easy <br className='hidden md:block' />
                to talk every day and hang out more often.
              </p>
              <div className='flex flex-col xl:flex-row items-center gap-5'>
                <button className='btn btn-white flex items-center gap-x-1'>
                  <Download />
                  Download for Windows
                </button>
                <button className='btn btn-black'>Open Discord in your browser</button>
              </div>
            </div>
          </section>
          {/* Section 2 */}
          <section className='bg-white py-20 lg:py-28'>
            <div className='container flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-y-0'>
              <img
                src='/section2.svg'
                alt=''
                className='md:w-6/12 lg:w-7/12'
              />
              <div className='text-black md:w-5/12 lg:w-4/12'>
                <h3>Create an invite-only place where you belong</h3>
                <p style={{ wordSpacing: '.2rem' }}>
                  Discord servers are organized into topic-based channels where you
                  can collaborate, share, and just talk about your day without
                  clogging up a group chat.
                </p>
              </div>
            </div>
          </section>
          {/* Section 3 */}
          <section className='bg-[#f6f6f6] py-20 lg:py-28'>
            <div className='container flex flex-col md:flex-row-reverse items-center justify-between gap-y-5 md:gap-y-0'>
              <img src='/section3.svg' alt='' className='md:w-6/12 lg:w-7/12' />
              <div className='text-black md:w-5/12 lg:w-4/12'>
                <h3>Where hanging out is easy</h3>
                <p style={{ wordSpacing: '.2rem' }}>
                  Grab a seat in a voice channel when you’re free. Friends in your
                  server can see you’re around and instantly pop in to talk without
                  having to call.
                </p>
              </div>
            </div>
          </section>
          {/* Section 4 */}
          <section className='bg-white py-20 lg:py-28'>
            <div className='container flex flex-col md:flex-row-reverse items-center justify-between gap-y-5 md:gap-y-0'>
              <img src='/section4.svg' alt='' className='md:w-6/12 lg:w-7/12' />
              <div className='text-black md:w-5/12 lg:w-4/12'>
                <h3>From few to a fandom</h3>
                <p style={{ wordSpacing: '0.2rem' }}>
                  Get any community running with moderation tools and custom member
                  access. Give members special powers, set up private channels, and
                  more.
                </p>
              </div>
            </div>
          </section>
          {/* Section 5 */}
          <section className='bg-[#f6f6f6] py-20 lg:py-28'>
            <div className='container'>
              <div className='text-center text-black md:px-16 lg:px-32'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase pb-5'>
                  Reliable tech for staying close
                </h2>
                <p className='text-justify'>
                  Low-latency voice and video feels like you’re in the same room.
                  Wave hello over video, watch friends stream their games, or gather
                  up and have a drawing session with screen share.
                </p>
              </div>
              <img src='/section5.svg' alt='' className='w-full' />
              <div className="text-black text-center bg-[url('/star.svg')] bg-no-repeat bg-center">
                <h4 className='text-xl md:text-3xl font-bold font-roboto pt-10 md:pt-24'>
                  Ready to start your journey?
                </h4>
                <button className='btn btn-blue mt-8 flex items-center justify-center gap-x-2 mx-auto'>
                  <Download />
                  <span>Download for Windows</span>
                </button>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className='bg-black py-20'>
          <div className='container flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20'>
            {/* Left Side */}
            <div>
              <h4 className='text-primary font-blackhans text-4xl lg:text-5xl font-extrabold uppercase'>
                Imagine A <br className='hidden md:block' />
                Place
              </h4>
              {/* Social Icons */}
              <div className='flex items-center gap-x-5 pt-4'>
                <ion-icon className='w-7 h-7 cursor-pointer hover:opacity-80' name='logo-twitter' />
                <ion-icon className='w-7 h-7 cursor-pointer hover:opacity-80' name='logo-facebook' />
                <ion-icon className='w-7 h-7 cursor-pointer hover:opacity-80' name='logo-instagram' />
                <ion-icon className='w-7 h-7 cursor-pointer hover:opacity-80' name='logo-youtube' />
              </div>
              <div />
            </div>
            {/* Right Side */}
            <div className='flex-1 grid grid-cols-2 lg:grid-cols-4 gap-10'>
              <ul className='flex flex-col gap-y-2'>
                <p className='text-sm text-primary'>Products</p>
                <a href='#' className='footerLink'>Download</a>
                <a href='#' className='footerLink'>nitro</a>
                <a href='#' className='footerLink'>Status</a>
              </ul>
              <ul className='flex flex-col gap-y-2'>
                <p className='text-sm text-primary'>Company</p>
                <a href='#' className='footerLink'>About</a>
                <a href='#' className='footerLink'>jobs</a>
                <a href='#' className='footerLink'>branding</a>
                <a href='#' className='footerLink'>newsroom</a>
              </ul>
              <ul className='flex flex-col gap-y-2'>
                <p className='text-sm text-primary'>Resources</p>
                <a href='#' className='footerLink'>College</a>
                <a href='#' className='footerLink'>Support</a>
                <a href='#' className='footerLink'>Safety</a>
                <a href='#' className='footerLink'>Blog</a>
                <a href='#' className='footerLink'>Developers</a>
                <a href='#' className='footerLink'>StreamKit</a>
              </ul>
              <ul className='flex flex-col gap-y-2'>
                <p className='text-sm text-primary'>Policies</p>
                <a href='#' className='footerLink'>Terms</a>
                <a href='#' className='footerLink'>Privacy</a>
                <a href='#' className='footerLink'>Cookie Settings</a>
                <a href='#' className='footerLink'>Guidelines</a>
                <a href='#' className='footerLink'>Acknowledgements</a>
                <a href='#' className='footerLink'>Licenses</a>
                <a href='#' className='footerLink'>Moderation</a>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='pt-10 flex flex-wrap gap-y-3 items-center justify-between border-t-2 border-primary mt-10'>
              {/* logo */}
              <Logo />
              {/* Copyright */}
              <div className='text-sm text-gray-400 flex gap-x-1 items-center'>
                <span>© Copyright 2022 - </span>
                <a href='https://github.com/jersonsilvaa' target='blank' className='text-primary hover:underline text-base'>
                  daviardev
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  )
}

export default Home
