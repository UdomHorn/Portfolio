

const Hero = () => {
  return (
    <section id="about" className="flex max-md:flex-col gap-20 justify-center items-center min-h-screen  font-Inter ">

      <div className="  text-start md:w-2/3 ">

      <h1 className="font-bold text-7xl max-xl:text-6xl-5xl max-md:text-4xl  text-black ">Hi, I am Udom</h1>
      <div className=" bg-gray-100 rounded-md mt-8 p-8 ">
        <p className="font-medium text-lg  text-gray-600 ">As a <span className="font-bold">Junior Front-End Developer</span>, I am passionate about creating visually with Notion
        appealing and responsive web applications. With a solid foundation in HTML, CSS, Javascript, I continuously strive to expand my skill and stay updated with the latest web technologies. I am eager to contribute my creativity and problem-solving abilities to building user-frienly, intuitive interfaces while growing within a collaborative team environment.</p>
      </div>
        
      </div>

      <div className="">
        <img src="cartoon.png" alt="Profile"
         />
      </div>
    </section>
  )
}

export default Hero