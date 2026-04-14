import { useNavigate } from 'react-router-dom'
import './Hero.css'
import hero from '../assets/hero.jpg'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
          url(${hero})
        `,
      }}
    >
      <div className="hero-box">
        <h1>
          Delivering environmentally sustainable polymer
          solutions
        </h1>

        <button
          className="hero-btn"
          onClick={() => navigate('/contact')}
        >
          Get in touch with us
        </button>
      </div>
    </section>
  )
}