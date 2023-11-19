import PhoneIcon from '../assets/img/phone.svg'

const Program = () => {
  return (
    <div>
      <div className='flex lg:gap-x-[10px] items-baseline lg:justify-end justify-center'>
        <img src={PhoneIcon} alt="phone-icon" 
        className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
        />
        <p className='lg:text-[23px] text-blue font-extrabold'>+ 1 000 10 84 000</p>
      </div>
      <div>
        <p className=' text-right text-sm flex'>
         <span className='hidden md:flex mr-1'>Opening Hours: </span>Mon - Sun: 10am - 6pm
        </p>
      </div>
    </div>
  )
};

export default Program;
