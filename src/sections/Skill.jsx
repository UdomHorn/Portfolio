import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3,faJs,faReact,faCss,faGithub, faCcAmazonPay,} from "@fortawesome/free-brands-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
const Skill = () => {
  return (
    <div id="skill" className=" sm:px-16 px-8 pt-28 font-Inter">
      
      <h1 className="  text-4xl font-medium pb-8 text-black flex justify-center  ">My Skill</h1>
      
      <div  className=" bg-gray-100 rounded-md pt-8 py-8 ">

      <marquee behavior="" direction="" >
      <div className=" gap-8 m-4 flex  " >

<div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all">
<FontAwesomeIcon icon={faHtml5}
className="w-8 h-8 ml-1 hover:text-orange-600 "
/>
<div className="">
<p className=" font-bold  ">HTML</p>
<p className="font-medium text-lg  text-gray-600 ">Structure</p>
</div>
</div>

<div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all">
<FontAwesomeIcon icon={faCss3}
className="w-8 h-8 ml-1 hover:text-blue-500 "
/>
<div>
<p className=" font-bold ">CSS</p>
<p className="font-medium text-lg  text-gray-600 ">User Interface</p>
</div>
</div>

<div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all">
<FontAwesomeIcon icon={faJs}
className="w-8 h-8 ml-1 hover:text-yellow-300 hover:bg-black"
/>
<div>
<p className=" font-bold ">Java Script</p>
<p className="font-medium text-lg  text-gray-600 ">Interactive</p>
</div>
</div>

<div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all">
<FontAwesomeIcon icon={faReact}
className="w-8 h-8 ml-1 hover:text-sky-500"
/>
<div>
<p className=" font-bold ">React Js</p>
<p className="font-medium text-lg  text-gray-600 ">Frame Work</p>
</div>
</div>

<div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all">
<FontAwesomeIcon icon={faCss}
className="w-8 h-8 ml-1 hover:text-sky-500"
/>
<div>
<p className=" font-bold ">Tailwind</p>
<p className="font-medium text-lg  text-gray-600 ">Frame Work</p>
</div>
</div>

<div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all">
<FontAwesomeIcon icon={faGithub}
className="w-8 h-8 ml-1 hover:text-white"
/>
<div>
<p className=" font-bold ">Github</p>
<p className="font-medium text-lg  text-gray-600 ">Version Control </p>
</div>
</div>



</div>
      </marquee>
    </div>
    </div>
    
    
    
  )
}

export default Skill