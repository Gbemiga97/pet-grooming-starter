import { Link } from "react-scroll";
import { navigation } from "../data";


const NavMobile = () => {
  return (
    <nav className="h-full">
      <ul className="flex flex-col justify-center items-center
      h-full space-y-5">
        {
          navigation.map(({name, href}, i) => (
            <li 
            className="capitalize font-medium text-blue"
            key={i}>
              <Link to={href}
              spy={true}
              activeClass="active"
              >
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default NavMobile;
