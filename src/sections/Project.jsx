import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import facebook from "../assets/facebook.jpg"
import camboreport from "../assets/cambo-report.jpg"
import sabaynews from "../assets/sabay-news.jpg"
import ten11 from "../assets/ten11.jpg"
import portfolio from "../assets/portfolio.jpg"
import onepiece from "../assets/onepiece.jpg"
const ProjectCard = ({ src, title, href }) => {
  return (
    <div className="w-80 h-[350px] border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all font-medium text-lg  text-gray-600 relative " >

      <img src={src} alt="" />
      <div className='mt-4 '>
        {title}
      </div>

      <a href={href} target="_blank" rel="noopener noreferrer" className='absolute flex justify-center items-center w-full h-full  top-0 left-0  opacity-0 hover:opacity-100 bg-black text-white'>
        <div className='absolute flex justify-center items-center w-full h-full  top-0 left-0  opacity-0 hover:opacity-100 bg-black text-white'>
          <div className='flex justify-center items-center gap-2'>
            Explore
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </div>
        </div>
      </a>
    </div>

  )
}

const Project = () => {
  return (
    <div id="project" className="font-Inter sm:px-16 px-8 pt-28">
      <h1 className="  text-4xl font-medium pb-8 text-black flex justify-center ">Project Hightlights </h1>

      <div className="flex  justify-center items-center  bg-gray-100 rounded-md px-8 py-8 ">

        <div className=" m-4 " >
          <p className="font-medium text-lg mt-4  text-black text-center ">Works that I've done.</p><span className="flex justify-center underline text-sm text-gray-600 ">Click on each item to explore</span>
          <div className="flex max-md:flex-col justify-center items-center bg-gray-100 rounded-md pt-8 py-8 ">

            <div className=" gap-8 m-4 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 " >

              <ProjectCard src={facebook} title="This is my really first project that I build after I finished HTML and CSS course " href="https://facebook-kappa-steel.vercel.app/" />

              <ProjectCard src={onepiece} title="This one kinda small and keep learning... " href="https://one-piece-ruby-beta.vercel.app/" />

              <ProjectCard src={sabaynews} title="This one is better but still only use HTML and CSS " href="https://sabay-news-one.vercel.app/" />

              <ProjectCard src={portfolio} title="Let's lern React and build our first portfolio website" href="https://portfolio-genus-projects.vercel.app/" />

              <ProjectCard src={camboreport} title="Let clone any project and put in our portfolio  " href="https://cambo-report.vercel.app/" />

              <ProjectCard src={ten11} title="Let's go deeper with React and clone any e-commerce webside and put in  our portfolio" href="https://ten11-kappa.vercel.app/" />




              {/* <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-300 p-4 hover:scale-105 transition-all">
        <div title="Facebook Profile">
        <p className=" font-bold ">HTML CSS Only Mobile Responsive</p>
        <a href="https://facebook-kappa-steel.vercel.app/">
          <img src="facebook-app-symbol.png"alt="" />
        </a>
        </div>
      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-gray-300 p-4 hover:scale-105 transition-all">
                        <div title="University Website">
                        <p className=" font-bold ">HTML CSS Following Tutorial</p>
                        <a href="https://edford-web.vercel.app/">
                          <img src="education.png"alt="" />
                        </a>
                        </div>
                      </div>

      <div className=" flex justify-start items-center gap-2 border-solid border-2 border-black rounded-md w-80 cursor-pointer hover:shadow-md hover:bg-red-100 p-4 hover:scale-105 transition-all">
                        <div title="Nike Website">
                        <p className=" font-bold ">React Js and Tailwind Responsive</p>
                        <a href="https://my-nike-jet.vercel.app/">
                          <img src="basketball.png"alt="" />
                        </a>
                        </div>
                      </div>
               */}


              {/* 
                
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
                        <div title="HTML CSS and Responsive">
                        <p className=" font-bold ">YouTube Clone (Coming soon...)</p>
                        <a href="">
                          <img src="youtube.png"alt="" />
                        </a>
                        </div>
                      </div>
                    */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project