import './Hero.css'
import hero from '../assests/hero.png'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)),
          url(${hero})
        `,
      }}
    >
      <div className="hero-box">
        <h1>
          Delivering environmentally sustainable acrylic polymer system
          solutions
        </h1>
        <button>Get in touch with us</button>
      </div>
    </section>
  )
}