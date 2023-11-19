import DogImg from '../assets/img/dogs/dog-contact.png'

const Contact = () => {
  return (
    <section id='contact' className='bg-yellow-secondary pt-6'>
       <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-around  items-center'>

          <div className='order-1 lg:-order-1 lg:mt-16'>
            <img src={DogImg} alt="dog" className='-mb-[12px]' />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-orange font-semibold mb-3'>
              Contact</p>
            <h2 className='text-4xl text-blue font-extrabold'>
              + 1 000 10 84 000</h2>
            <p className='mb-7 text-blue'>Opening Hours: Mon - Sun: 10am - 6pm</p>
            <button className='btn'>
              Get an appointment</button>
          </div>
        </div>
       </div>
    </section>
  )
};

export default Contact;
