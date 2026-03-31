import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Strip from './components/Strip/Strip'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FloatButton from './components/FloatButton/FloatButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Strip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatButton />
    </>
  )
}

export default App
