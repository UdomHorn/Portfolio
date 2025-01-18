import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3,faJs,faReact,faCss,faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons"

const Project = () => {
  return (
    <div id="project" className="font-Inter sm:px-16 px-8 pt-28">
      <h1 className="  text-4xl font-medium pb-8 text-black ">Project Hightlights </h1>
      
                <div  className="flex  justify-center items-center  bg-gray-100 rounded-md px-8 py-8 ">
            
                <div className=" m-4 " >
                <p className="font-medium text-lg mt-4  text-black text-center ">Works that I've done.</p><span className="flex justify-center underline text-sm text-gray-600 ">Click on each item to explore</span>
                <div  className="flex max-md:flex-col justify-center items-center bg-gray-100 rounded-md pt-8 py-8 ">
                
                      <div className=" gap-8 m-4 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 " >
            

                      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
        <div title="HTML, CSS Mobile Responsive">
        <p className=" font-bold ">Facebook Clone (Own)</p>
        <a href="https://facebook-kappa-steel.vercel.app/">
          <img src="facebook-app-symbol.png"alt="" />
        </a>
        </div>
      </div>

                        <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
                        <div title="HTML CSS and Responsive">
                        <p className=" font-bold ">YouTube Clone (Tutorial)</p>
                        <a href="https://udomhorn.github.io/Youtube-clone/">
                          <img src="youtube.png"alt="" />
                        </a>
                        </div>
                      </div>
              
                      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
                        <div title="HTML CSS and Responsive">
                        <p className=" font-bold ">Education Clone (Tutorial)</p>
                        <a href="https://edford-web.vercel.app/">
                          <img src="education.png"alt="" />
                        </a>
                        </div>
                      </div>
                
                
                      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
                        <div>
                        <p className=" font-bold ">Telegram Clone(Coming Soon...)</p>
                        <a href="">
                          <img src="telegram.png"alt="" />
                        </a>
                        </div>
                      </div>
                
                      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
        <div>
        <p className=" font-bold ">Amazon Clone (Coming Soon...)</p>
        <a href="">
          <img src="logo.png"alt="" />
        </a>
        </div>
      </div>
      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
                        <div>
                        <p className=" font-bold ">Nike (Working...)</p>
                        <a href="https://my-nike-jet.vercel.app/">
                          <img src="basketball.png"alt="" />
                        </a>
                        </div>
                      </div>
                      
                
                    </div>
                    </div>
              </div>
              </div>
              </div>
  )
}

export default Project