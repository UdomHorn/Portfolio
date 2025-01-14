import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3,faJs,faReact,faCss,faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons"

const Hightlight = () => {
  return (
    <div id="work" className="font-Inter">
      <h1 className="  text-4xl font-medium pb-8 text-black ">Portfolio Hightlights</h1>
      
                <div  className="flex  justify-center items-center  bg-gray-100 rounded-md px-8 py-8 ">
            
                <div className=" m-4 " >
                <p className="font-medium text-lg mt-4  text-gray-600 text-center ">Works that I've done.</p>
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
                        <p className=" font-bold ">Telegram Clone(Unavailable)</p>
                        <a href="">
                          <img src="telegram.png"alt="" />
                        </a>
                        </div>
                      </div>
                
                      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
        <div>
        <p className=" font-bold ">Amazon Clone (Unavailable)</p>
        <a href="">
          <img src="logo.png"alt="" />
        </a>
        </div>
      </div>
      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-200 p-4">
                        <div>
                        <p className=" font-bold ">Nike Clone (Unavailable)</p>
                        <a href="">
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

export default Hightlight