import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 🔗 Backend integration point
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })

    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Reach out to us for product inquiries, technical support, or customized
          polymer solutions. Our team will get back to you promptly.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-block">
            <strong>Registered Office</strong>
            <p>
              D-301, 3rd Floor, Grand Orchid Apartment,<br />
              Opp. Kirloskar Chiller Company,<br />
              Saswad Tal-Purandar, Pune – 412301
            </p>
          </div>

          <div className="info-block">
            <strong>Manufacturing Unit</strong>
            <p>
              Gut No. 180/1/B/3, Khudus (Akluj),<br />
              Tal-Malshiras, Dist-Solapur – 413113
            </p>
          </div>

          <div className="info-block">
            <strong>Phone</strong>
            <p>
              +91 9172384724<br />
              +91 8668902360
            </p>
          </div>

          <div className="info-block">
            <strong>Email</strong>
            <p>
              kale_dv@rediffmail.com<br />
              santoshkale985@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
