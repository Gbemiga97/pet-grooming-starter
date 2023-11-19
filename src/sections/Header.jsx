import { useState } from 'react';
import Logo from '../assets/img/logo.svg'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { useEffect } from 'react';
import { Nav, NavMobile, Program } from '../components';




const Header = () => {
  const [bg, setBg] = useState(false)

  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-white py-4 shadow-md' : 'bg-none py-5'}
    fixed w-full right-0 left-0 z-10 transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center ">
         <a href="#">
            <img src={Logo} alt="logo" />
         </a>

         <div className='hidden lg:flex'  >
          <Nav />
         </div>

         <Program />

         <button 
         onClick={() => setShowNav(prev => !prev)}
         className='lg:hidden cursor-pointer text-blue text-3xl'>
          {
            showNav ? <CgClose /> : <CgMenuRight />
          }
         </button>

         <div className={`${showNav ? 'max-h-[260px]' : 'max-h-0'} fixed bg-yellow shadow-lg
         left-0 w-full top-[78px] h-full overflow-hidden transition-all`}>
          <NavMobile />
         </div>
      </div>
    </header>
  )
};

export default Header;
