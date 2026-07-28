import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Hero, Skill, Project, Contact, About, Footer} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

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