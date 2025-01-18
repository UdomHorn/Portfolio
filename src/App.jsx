
import {Hero, Skill, Project, Contact, Footer} from "./sections";
import Nav from "./components/Nav";
const App = () => {
  return (
    
    <main className="relative">
      <section >
      <Nav /> 
      </section>

      <section >
        <Hero />
      </section>
      <section className="  ">
        <Skill />
      </section>
      <section className="">
        <Project />
      </section>
      <section className="">
        <Contact />
      </section>
      <section className=" ">
        <Footer />
      </section>
    </main>
  )
}

export default App