import hornudom from "../assets/hornudom.jpg"
const Hero = () => {
  return (
    <section id="home" className=" sm:px-16  px-8  pt-28 flex max-md:flex-col gap-10 justify-center items-center  font-Inter ">

      <div className="  text-start md:w-2/3  " data-aos="fade-right">

      <h1 className="font-bold text-6xl max-xl:text-5xl max-md:text-5xl  text-black ">Hi, I am Udom</h1>
      <div className=" bg-gray-100 rounded-md mt-8 p-8">
        <p className="font-medium text-lg  text-gray-600 ">As a <span className="font-bold">Junior Full-Stack Developer</span>, I&apos;m passionate about building modern, scalable web applications using React, Tailwind CSS, and Node.js. I enjoy turning ideas into intuitive, high-performance products and continuously improving my skills to deliver impactful solutions within a collaborative team.</p>
      </div>
      <div className="mt-6">
        <a 
          href="/Horn Udom Resume.pdf" 
          download="Udom_Horn_Resume.pdf" 
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-sm hover:shadow-md"
        >
          Download Resume
        </a>
      </div>
        
      </div>

      <div className="w-[350px] pt-16" data-aos="fade-left">
        <img src={hornudom} alt="Profile" className="rounded-md" />
      </div>
    </section>
  )
}

export default Hero