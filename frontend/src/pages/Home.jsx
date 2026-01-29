
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import About from '../components/About'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
import DiscussCTA from '../components/DiscussCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Stats />
      <DiscussCTA />
      <Footer />
    </>
  )
}
