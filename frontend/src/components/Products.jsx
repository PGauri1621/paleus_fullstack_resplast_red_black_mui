import { useNavigate } from 'react-router-dom'
import './Products.css'

const productResources = [
  {
    title: 'Products',
    description:
      'Comprehensive brochures outlining our product portfolio, applications, performance characteristics and industry usage.',
  },
  {
    title: 'Technical Data Sheets',
    description:
      'Detailed technical specifications including chemical properties, performance data, handling guidelines and application parameters.',
  },
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <section className="products">
      <div className="products-inner">
        <div className="products-header">
          <h2>Product Information</h2>
          <p>
            Access detailed product documentation to support evaluation,
            specification and application of our specialty polymer systems.
          </p>
        </div>

        <div className="products-list">
          {productResources.map((item) => (
            <div
              key={item.title}
              className="product-row"
              onClick={() => navigate('/products')}
            >
              <div className="product-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="product-action">
                <span>Find out more →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
