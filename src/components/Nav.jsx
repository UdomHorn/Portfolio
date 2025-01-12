
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Nav = () => {
  return (
    <header className="sm:px-16 px-8 py-8 relative z-10 w-full bg-white ">
      <nav className="flex justify-between items-center ">
        <a href="/">
          <img 
          src="cartoon.png"
          alt="Logo"
          className="w-[50px] h-[50px]"
          />
        </a>
        <ul className="flex-1 flex justify-center  max-sm:hidden">
          <li className=" flex text-lg font-Inter text-black gap-16  ">
            <a className="hover:text-gray-500 " href="#about">About</a>
            <a className="hover:text-gray-500" href="#skill">Skill</a>
            <a className="hover:text-gray-500" href="#work">Work</a>
            <a className="hover:text-gray-500"href="#contact">Contact</a>
          </li>
        </ul>
       
       <div className="hidden max-sm:block ">
       <FontAwesomeIcon icon={faBars} 
       className=" w-[25px] h-[25px]" 
       />
       </div>
       
      </nav>
    </header>
  )
}

export default Nav