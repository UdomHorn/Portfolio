
import {Hero, Skill, Project, Contact, About, Footer} from "./sections";
import Nav from "./components/Nav";
const App = () => {
  return (
    
    <main className="relative">
      <section > <Nav /> </section>

      <section> <Hero /> </section>

      <section> <Skill /> </section>

      <section> <Project /> </section>

      <section> <About /> </section>

      <section> <Contact /> </section>
      
      <section> <Footer /> </section>
    </main>
  )
}

export default App