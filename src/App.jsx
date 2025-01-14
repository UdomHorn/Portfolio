
import {Hero, Tools, Hightlight, Contact, Footer} from "./sections";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <section >
      <Nav /> 
      </section>
      <section className="sm:pl-16 sm:pr-16  pl-8 pr-8 pb-12 pt-12">
        <Hero />
      </section>
      <section className="sm:pl-16 sm:pr-16  pl-8 pr-8 pb-12   ">
        <Tools />
      </section>
      <section className="sm:pl-16 sm:pr-16  pl-8 pr-8 pb-12">
        <Hightlight />
      </section>
      <section className="sm:pl-16 sm:pr-16  pl-8 pr-8 pb-12 ">
        <Contact />
      </section>
      <section className=" bg-black flex justify-center  p-8 ">
        <Footer />
      </section>
    </main>
  )
}

export default App