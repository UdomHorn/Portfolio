import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import camboreport from "../assets/cambo-report.jpg"
import ten11 from "../assets/ten11.jpg"
import plovdev from "../assets/Plovdev.jpg"
import devclothes from "../assets/Devclothes.jpg"
import miniAiAssistant from "../assets/mini-ai-assistant.jpg"
import movieApp from "../assets/movie.jpg"
const projects = [
  {
    title: "Cambo-report",
    type: "Clone Project",
    description: "Clone cambo-report news report and content distribution platform.",
    features: [
      "Built with React.js & Tailwind CSS",
      "Responsive article grid & list layouts",
      "Category navigation & search filtering"
    ],
    href: "https://cambo-report.vercel.app/",
    src: camboreport,
  },
  {
    title: "Ten11",
    type: "Clone Project",
    description: "Clone ten11 app, modern e-commerce concept store.",
    features: [
      "Built with React.js & Tailwind CSS",
      "Modern clothing grids & collection filters",
      "State-managed responsive shopping cart"
    ],
    href: "https://ten11-kappa.vercel.app/",
    src: ten11,
  },
  {
    title: "Devclothes",
    type: "Personal Project",
    description: "An interactive e-commerce shop with online payment integration.",
    features: [
      "React, Node, Express, PostgreSQL",
      "Secure Stripe checkout & payment system",
      "Resend API email auth & bot alert notifications",
      "Admin panel for product/order tracking"
    ],
    href: "https://e-commerce-payment-31kr.onrender.com",
    src: devclothes,
  },
  {
    title: "PlovDev",
    type: "Team Project",
    description: "E-learning platform connecting students to job opportunities.",
    features: [
      "React, Node, Express, PostgreSQL",
      "Course enrollment system & dashboards",
      "Career matching, resume building & job board"
    ],
    href: "https://www.plovdev.site/",
    src: plovdev,
  },
  {
    title: "Mini AI Assistant",
    type: "Personal Project",
    description: "An intelligent chatbot assistant powered by Gemini API, designed for dynamic user conversation.",
    features: [
      "Built with HTML, CSS & JavaScript",
      "Seamless integration with Gemini AI API",
      "Real-time conversational streaming & prompt history"
    ],
    href: "https://mini-ai-assistant-2123.onrender.com/",
    src: miniAiAssistant,
  },
  {
    title: "Movie App",
    type: "Personal Project",
    description: "A comprehensive movie dashboard with detailed search, filter options, and rating displays.",
    features: [
      "Built with React.js & Tailwind CSS",
      "Dynamic movie search and filtering via TMDB API",
      "Responsive rating cards and interactive trailer modals"
    ],
    href: "https://movie-app-62j6.vercel.app/",
    src: movieApp,
  }
];

const ProjectCard = ({ src, title, type, description, features, href, index }) => {
  return (
    <div className="w-80 min-h-[350px] h-auto border-solid border-2 border-black rounded-md px-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all font-medium text-lg text-gray-600 relative pb-6" data-aos="fade-up" data-aos-delay={(index % 3) * 150} >

      <img src={src} alt="" />
      <div className='mt-4 '>
        <p className="font-bold text-black">{title}</p>
        <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">{type}</p>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <ul className="text-xs text-gray-500 mt-2 list-disc pl-4 space-y-1 text-start">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      <a href={href} target="_blank" rel="noopener noreferrer" className='absolute flex justify-center items-center w-full h-full  top-0 left-0  opacity-0 hover:opacity-100 bg-black text-white'>
        <div className='absolute flex justify-center items-center w-full h-full  top-0 left-0  opacity-0 hover:opacity-100 bg-black text-white rounded-md'>
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
      <h1 className="  text-4xl font-medium pb-8 text-black flex justify-center " data-aos="fade-down">Project Highlights </h1>

      <div className="flex  justify-center items-center  bg-gray-100 rounded-md px-8 py-8 ">

        <div className=" m-4 " >
          <p className="font-medium text-lg mt-4  text-black text-center ">Project Experience</p><span className="flex justify-center underline text-sm text-gray-600 ">Click on each item to explore</span>
          <div className="flex max-md:flex-col justify-center items-center bg-gray-100 rounded-md pt-8 py-8 ">

            <div className=" gap-8 m-4 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 " >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project