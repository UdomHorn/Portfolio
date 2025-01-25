
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sm:px-16 px-8  w-full  fixed top-0 py-1 mb-32 bg-white shadow-lg z-10 font-Inter">
      <div className="flex justify-between items-center ">
      <a className="font-semibold text-2xl hover:scale-110 transition-all pr-2"href="\">Udom</a>

        <ul className="flex-1 flex justify-center font-Inter text-black text-lg max-sm:hidden">
          <li className=" flex   gap-12  ">
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#home">Home</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#skill">Skill</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#project">Project</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#about">About</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all"href="#contact">Contact</a>
          </li>
        </ul>
       
        <i  className="bx bx-menu hidden max-sm:block  text-black text-4xl cursor-pointer hover:scale-110 transition-all" onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

        <div className= {`absolute top-14 pb-4 left-0 w-full text-center sm:hidden font-Inter text-black text-lg bg-white shadow-md ">
          <li className="list-none flex flex-col gap-4 ${isMenuOpen ? "opacity-100": "opacity-0"}`}>

            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#home">Home</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#skill">Skill</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#project">Project</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#about">About</a>
            <a className="hover:text-gray-500 hover:scale-110 transition-all" href="#contact">Contact</a>
          </div>


      </div>
      
      

    </header>
    
    
  )
}

export default Nav