import Logo from '../assets/img/logo-white.svg'
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex text-white flex-col gap-y-6 lg:flex-row items-center
        justify-between'>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>

          <small className='text-[15px]'>
            &copy; Copy right {new Date().getFullYear()} All rights reserved.
          </small>

          <div className='flex gap-x-4'>
            {
              social.map(({icon, href}, i) => (
                <div 
                className='bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10
                h-10 rounded-full flex justify-center items-center transition text-2xl'
                key={i}>
                  <a href={href}>{icon}</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
