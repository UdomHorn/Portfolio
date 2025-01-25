

const Hero = () => {
  return (
    <section id="home" className=" sm:px-16  px-8  pt-28 flex max-md:flex-col gap-10 justify-center items-center  font-Inter ">

      <div className="  text-start md:w-2/3  ">

      <h1 className="font-bold text-6xl max-xl:text-5xl max-md:text-4xl  text-black ">Hi, I am Udom</h1>
      <div className=" bg-gray-100 rounded-md mt-8 ">
        <p className="font-medium text-lg  text-gray-600 ">As a <span className="font-bold">Junior Front-End Developer</span>, I am passionate about creating visually with Notion
        appealing and responsive web applications. With a solid foundation in HTML, CSS, Javascript, I continuously strive to expand my skill and stay updated with the latest web technologies. I am eager to contribute my creativity and problem-solving abilities to building user-frienly, intuitive interfaces while growing within a collaborative team environment.</p>
      </div>
        
      </div>

      <div className="w-[350px] pt-16">
        <img src="me.jpg" alt="Profile" className="rounded-full"
         />
      </div>
    </section>
  )
}

export default Hero