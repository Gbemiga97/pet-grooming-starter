import { navigation } from "../data";
import { Link } from "react-scroll";


const Nav = () => {
  return (
    <nav className="text-[1rem]">
      <ul className="flex gap-x-10">
        {
          navigation.map(({name, href}, i) => (
            <li key={i}>
              <Link
              className="capitalize hover:text-orange transition cursor-pointer"
              to={href}
              spy={true}
              activeClass="active">
                {name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
