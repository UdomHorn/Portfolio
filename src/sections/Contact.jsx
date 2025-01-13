import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebookSquare, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons"
const Contact = () => {
  return (
    <div id="contact" className=" font-Inter">
          <h1 className="  text-4xl font-medium pb-8 text-black ">Feel Free To Contact Me</h1>

          <div  className="flex  justify-center items-center  bg-gray-100 rounded-md pt-8 py-8 ">
      
          <div className=" m-4 " >
          <p className="font-medium text-lg mt-4  text-gray-600 text-center ">You can reach out to me through the following platform</p>
            <div className=" flex justify-center items-center gap-4 pt-8  ">
          <a href="https://www.facebook.com/itsudom/">
          <FontAwesomeIcon icon={faFacebookSquare}
          className="w-8 h-8 hover:text-blue-700 cursor-pointer"
          />
          </a>
          <a href="https://github.com/UdomHorn/">
          <FontAwesomeIcon icon={faGithub}
          className="w-8 h-8 hover:text-white cursor-pointer"
          />
          </a>
          <a href="https://www.linkedin.com/in/horn-udom-9a66b52aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <FontAwesomeIcon icon={faLinkedin}
          className="w-8 h-8 hover:text-blue-700 cursor-pointer"
          />
          </a>
          <a href="https://t.me/uudxm">
          <FontAwesomeIcon icon={faTelegram}
          className="w-8 h-8 hover:text-blue-500 cursor-pointer"
          />
          </a>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Contact