import { useState } from "react";
import { bundleData } from "../data";
import { useEffect } from "react";
import { Bundles } from "../components";


const Prices = () => {
  const [index, setIndex] = useState(0)
  const [bundles, setBundles] = useState([])

  useEffect(() => {
    setBundles(bundleData[0].services)
  }, [])


  const getBundle = (name) => {
    const newBundle = bundleData.find(bundle => bundle.name === name)
    setBundles(newBundle.services)
  }
  return (
    <section id="prices" className="py-12 lg:py-24 ">
         <div className="container mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange font-semibold mb-3">Our Prices</p>
            <h2 className="h2 mb-3" >How Big Your Dog IS</h2>
            <p className="text-lg text-blue">Choose your dog category</p>
          </div>

          <div className="grid grid-cols-4 gap-4 lg:gap-[30px]">
            {
              bundleData.map(({id, name, image, dogCategory}, idx) => (
                <div 
                onClick={() => {
                  setIndex(idx)
                  getBundle(name)
                }}
                key={id} className="cursor-pointer text-center">
                  <div className="mb-2 lg:mb-8 hover:scale-105 transition-all duration-300">
                    <img src={image.type} alt={name} className="w-full" />
                  </div>
                  <h3 className="lg:text-2xl capitalize font-semibold text-blue lg:mb-2">{name}</h3>

                  <div className={`${index === idx ? 
                  "border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative " 
                  : 'border-b-4 border-transparent pb-4 mb-12'}`}>
                    <div className="hidden md:block">{dogCategory}</div> 
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            <Bundles bundles={bundles} />
          </div>
         </div>
    </section>
  )
};

export default Prices;
