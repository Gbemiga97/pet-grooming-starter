import {BsCheckCircleFill} from 'react-icons/bs'

const Bundles = ({bundles}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[30px]'>
      {
        bundles.map(({name, price, list}, i) => (
          <div key={i} className='w-full lg:max-w-1/3 bg-white shadow-primary text-center
          h-[560px] rounded-[60px] py-12 px-8'>
            <h3 className='text-5xl font-bold text-blue mb-4'>
              ${price}</h3>
            <p className='capitalize mb-12 text-blue font-medium'>
              {name}</p>
            <div className='flex flex-col gap-y-4 max-w-[230px] mx-auto'>
              {
                list.map((item, i) => (
                  <div key={i} className='flex items-center gap-x-3'>
                    <BsCheckCircleFill className='text-orange text-xl' />
                  <p className='capitalize'>{item}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default Bundles;
