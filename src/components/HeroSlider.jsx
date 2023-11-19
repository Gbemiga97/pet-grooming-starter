import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../swiper.css'
import { heroSlider } from "../data";
import { Autoplay, Navigation, Pagination } from "swiper";




const HeroSlider = () => {


  return (
    <Swiper modules={[Pagination, Navigation, Autoplay]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false
    }}
    loop={true}
    pagination={{
      clickable : true,
      dynamicBullets: true
    }}
    navigation={true}
    className='heroSlider'
    >
      {
        heroSlider.map(({id, title, subtitle, image, buttonText}) => (
          <SwiperSlide key={id} className='py-12 lg:py-16'>
            <div className="container mx-auto text-center lg:text-left">
              <div className="flex flex-col justify-between items-center
              lg:flex-row">
                <div className="flex-1">
                  <h1 className="text-blue text-[36px] leading-tight lg:text-[72px]
                  lg:leading-[98px] font-extrabold mb-4" >
                    {title}</h1>
                  <p className="text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8">
                    {subtitle}</p>
                  <button className="btn mb-8 lg:mb-0">
                    {buttonText}</button>
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={image.type} alt={title} 
                  className="h-96 lg:h-auto"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default HeroSlider;
