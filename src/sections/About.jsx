
import { useState } from "react"
import img1 from "../assets/Personalimage/IMG_8190.jpg"
import img2 from "../assets/Personalimage/IMG_8191.jpg"
import img3 from "../assets/Personalimage/IMG_8192.jpg"
import img4 from "../assets/Personalimage/IMG_4719_compressed.jpg"
import img5 from "../assets/Personalimage/photo_2026-07-31_14-09-07.jpg"

const About = () => {
  const [usePdfFallback, setUsePdfFallback] = useState(false);

  const photos = [
    { id: 0, img: img1, caption: "Learning Code" },
    { id: 1, img: img2, caption: "Developer Life" },
    { id: 2, img: img3, caption: "Focus Time" },
    { id: 3, img: img4, caption: "Graduation" },
    { id: 4, img: img5, caption: "Horn Udom" }
  ];

  return (
    <div id="about" className=" sm:px-16 px-8 pt-28 font-Inter">
      <h1 className="  text-4xl font-medium  text-black flex justify-center " data-aos="fade-down">About Me</h1>
    
      {/* Bio Text */}
      <div className="bg-gray-100 rounded-md p-8 mt-8 w-full max-w-4xl mx-auto" data-aos="fade-up">
        <p className="font-medium text-lg text-gray-600"> Hi my name is <span className="font-bold">Udom</span>, I am a bachelor majoring in Information Technology, Fresh graduate from the Royal University of Phnom Penh since June 2024, and I have been studying at Above and Beyond School as Backend Student graduated in July 2026.</p>
        <p className="font-medium text-lg text-gray-600 mt-4"> I have taken several courses online and also completed several projects related to web development that demonstrate my ability to turn design concepts into functional and interactive. I am excited to expand my knowledge in web development and beyond.</p>
      </div>

      {/* Polaroid Gallery Grid */}
      <div className="mt-16 w-full flex flex-col items-center animate-fade-in" data-aos="fade-up">
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
          {photos.map((photo, index) => {
            const rotations = [
              "rotate-[-3deg] hover:rotate-0",
              "rotate-[2deg] hover:rotate-0",
              "rotate-[-1deg] hover:rotate-0",
              "rotate-[3deg] hover:rotate-0",
              "rotate-[-2deg] hover:rotate-0"
            ];
            const rotationClass = rotations[index % rotations.length];
            return (
              <div 
                key={photo.id}
                className={`bg-white p-3 pb-8 border border-gray-200 shadow-lg rounded-sm w-56 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer ${rotationClass}`}
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-gray-50 border border-gray-100 rounded-sm">
                  <img src={photo.img} alt={photo.caption} className="w-full h-full object-cover select-none pointer-events-none" />
                </div>
                <p className="text-center text-gray-500 text-sm mt-3 select-none pointer-events-none" style={{ fontFamily: 'Caveat, cursive' }}>{photo.caption}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="mt-24 w-full" data-aos="fade-up">
        <h2 className="text-3xl font-medium text-black text-center mb-16">Education</h2>
        
        <div className="relative max-w-4xl mx-auto border-l-2 border-black pl-8 ml-4 sm:ml-auto">
          {/* Milestone 1: Above & Beyond School */}
          <div className="mb-12 relative">
            <div className="absolute -left-[41px] top-1.5 bg-black w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-black">Above & Beyond School</h3>
                <p className="text-md font-medium text-gray-500">Backend Software Development Student</p>
              </div>
              <span className="text-xs font-bold bg-black text-white px-3 py-1 rounded-md w-fit mt-2 sm:mt-0 uppercase tracking-wider">
                Graduated July 2026
              </span>
            </div>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mt-3">
              <li>Mastered database design, RESTful API architecture, and server management.</li>
              <li>Gained deep knowledge of Node.js, Express.js, PostgreSQL, and security configurations.</li>
              <li>Collaborated on backend sprint iterations, team code reviews, and API deployments.</li>
            </ul>
          </div>

          {/* Milestone 2: Royal University of Phnom Penh */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1.5 bg-black w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-black">Royal University of Phnom Penh</h3>
                <p className="text-md font-medium text-gray-500">Bachelor of Information Technology (IT)</p>
              </div>
              <span className="text-xs font-bold bg-gray-200 text-black border border-black px-3 py-1 rounded-md w-fit mt-2 sm:mt-0 uppercase tracking-wider">
                Graduated June 2024
              </span>
            </div>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mt-3">
              <li>Acquired core theoretical knowledge in software engineering, networking, and relational databases.</li>
              <li>Completed multiple academic front-end and full-stack projects using modern JS tools.</li>
              <li>Graduated successfully, establishing a robust IT academic foundation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CV Section */}
      <div id="cv-section" className="mt-28 flex flex-col items-center w-full" data-aos="fade-up">
        <h2 className="text-3xl font-medium text-black text-center mb-12">Resume</h2>
        <div className="w-full max-w-3xl bg-white rounded-lg overflow-hidden border border-gray-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300">
          {!usePdfFallback ? (
            <img 
              src="/Horn Udom Resume.png" 
              alt="Horn Udom CV / Resume" 
              className="w-full h-auto block"
              onError={() => setUsePdfFallback(true)}
            />
          ) : (
            <iframe 
              src="/Horn Udom Resume.pdf" 
              width="100%" 
              style={{ border: 'none' }}
              title="Horn Udom Resume PDF"
              className="w-full h-[850px] md:h-[1000px]"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default About