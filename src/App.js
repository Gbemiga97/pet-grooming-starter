import { Appointment, Contact, Footer, Header, Hero, Prices } from "./sections";


const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto  bg-orange-quaternary relative">
      <Header />
      <Hero />
      <Appointment />
       <Prices />
      <Contact />
       <Footer />
    </div>
  )
};

export default App;
