import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3,faJs,faReact,faCss,faGithub} from "@fortawesome/free-brands-svg-icons"
const Tools = () => {
  return (
    <div id="skill" className=" font-Inter">
      <h1 className="  text-4xl font-medium pb-8 text-black ">Tools I Use</h1>
      <div  className="flex max-md:flex-col justify-center items-center bg-gray-100 rounded-md pt-8 py-8 ">

      <div className=" gap-8 m-4 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 " >
        <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-44 cursor-pointer hover:shadow-md hover:bg-gray-200">
      <FontAwesomeIcon icon={faHtml5}
      className="w-8 h-8 hover:text-orange-600"
      />
        <div>
        <p className=" font-bold ">HTML</p>
        <p className="font-medium text-lg  text-gray-600 ">Structure</p>
        </div>
      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-44 cursor-pointer hover:shadow-md hover:bg-gray-200">
      <FontAwesomeIcon icon={faCss3}
      className="w-8 h-8 hover:text-blue-500"
      />
        <div>
        <p className=" font-bold ">CSS</p>
        <p className="font-medium text-lg  text-gray-600 ">User Interface</p>
        </div>
      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-44 cursor-pointer hover:shadow-md hover:bg-gray-200">
      <FontAwesomeIcon icon={faJs}
      className="w-8 h-8 hover:text-yellow-300 hover:bg-black"
      />
        <div>
        <p className=" font-bold ">Java Script</p>
        <p className="font-medium text-lg  text-gray-600 ">Interactive</p>
        </div>
      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-44 cursor-pointer hover:shadow-md hover:bg-gray-200">
      <FontAwesomeIcon icon={faReact}
      className="w-8 h-8 hover:text-sky-500"
      />
        <div>
        <p className=" font-bold ">React Js</p>
        <p className="font-medium text-lg  text-gray-600 ">Frame Work</p>
        </div>
      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-44 cursor-pointer hover:shadow-md hover:bg-gray-200">
      <FontAwesomeIcon icon={faCss}
      className="w-8 h-8 hover:text-sky-500"
      />
        <div>
        <p className=" font-bold ">Tailwind</p>
        <p className="font-medium text-lg  text-gray-600 ">Frame Work</p>
        </div>
      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-44 cursor-pointer hover:shadow-md hover:bg-gray-200">
      <FontAwesomeIcon icon={faGithub}
      className="w-8 h-8 hover:text-white"
      />
        <div>
        <p className=" font-bold ">Github</p>
        <p className="font-medium text-lg  text-gray-600 ">Version Control </p>
        </div>
      </div>

      

    </div>
    </div>
    </div>
    
    
    
  )
}

export default Tools