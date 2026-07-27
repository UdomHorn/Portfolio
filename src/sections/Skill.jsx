import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faReact, faCss, faGithub, faNodeJs, faGitAlt, faTelegram, faStripe } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faServer, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SkillCard = ({ icon, title, subtitle, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-start items-center gap-3 border-solid border-2 border-black rounded-md p-4 cursor-pointer hover:shadow-md hover:bg-gray-300 hover:scale-105 transition-all w-full bg-white"
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="w-8 h-8 ml-1 shrink-0 transition-colors duration-300" 
        style={{ color: isHovered ? color : "black" }} 
      />
      <div className="text-left">
        <p 
          className="font-bold text-sm transition-colors duration-300"
          style={{ color: isHovered ? color : "black" }}
        >
          {title}
        </p>
        <p className="font-medium text-xs text-gray-600 mt-0.5">{subtitle}</p>
      </div>
    </div>
  )
}

const frontendSkills = [
  { icon: faHtml5, title: "HTML", subtitle: "Markup Language", color: "#E34F26" },
  { icon: faCss3, title: "CSS", subtitle: "User Interface", color: "#1572B6" },
  { icon: faJs, title: "Java Script", subtitle: "Interactive", color: "#F0B429" },
  { icon: faReact, title: "React Js", subtitle: "Frame Work", color: "#00D8FF" },
  { icon: faCss, title: "Tailwind", subtitle: "Frame Work", color: "#38BDF8" }
];

const backendSkills = [
  { icon: faNodeJs, title: "Node Js", subtitle: "Backend Runtime", color: "#339933" },
  { icon: faServer, title: "Express Js", subtitle: "Web Framework", color: "#4B5563" },
  { icon: faDatabase, title: "PostgreSQL", subtitle: "Database System", color: "#336791" }
];

const toolsAndApis = [
  { icon: faStripe, title: "Stripe API", subtitle: "Payment Services", color: "#635BFF" },
  { icon: faTelegram, title: "Telegram Bot", subtitle: "Alerts & APIs", color: "#0088CC" },
  { icon: faEnvelope, title: "Resend Email", subtitle: "Transactional API", color: "#EA4335" },
  { icon: faGithub, title: "Github", subtitle: "Version Control", color: "#24292F" },
  { icon: faGitAlt, title: "Git", subtitle: "Version Control", color: "#F05032" }
];

const Skill = () => {
  return (
    <div id="skill" className="sm:px-16 px-8 pt-28 font-Inter">
      <h1 className="text-4xl font-medium pb-8 text-black flex justify-center">My Skill</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Frontend Category */}
        <div className="border-solid border-2 border-black rounded-md p-6 bg-gray-100 flex flex-col gap-4 text-left">
          <h3 className="font-bold text-black text-lg border-b-2 border-black pb-2">Frontend</h3>
          <div className="flex flex-col gap-3 flex-grow">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Backend Category */}
        <div className="border-solid border-2 border-black rounded-md p-6 bg-gray-100 flex flex-col gap-4 text-left">
          <h3 className="font-bold text-black text-lg border-b-2 border-black pb-2">Backend</h3>
          <div className="flex flex-col gap-3 flex-grow">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Tools & APIs Category */}
        <div className="border-solid border-2 border-black rounded-md p-6 bg-gray-100 flex flex-col gap-4 text-left">
          <h3 className="font-bold text-black text-lg border-b-2 border-black pb-2">APIs & Tools</h3>
          <div className="flex flex-col gap-3 flex-grow">
            {toolsAndApis.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill