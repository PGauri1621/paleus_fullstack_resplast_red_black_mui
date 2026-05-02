import { useState } from 'react'
import './Contact.css'

const API_URL =
  process.env.REACT_APP_API_URL ||
  'https://paleus-fullstack-resplast-red-black-mui-7.onrender.com/api/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        message: 'Please fill all required fields.',
      })
      return
    }

    setStatus({ loading: true, success: null, message: '' })

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setStatus({
        loading: false,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      // Auto clear success message
      setTimeout(() => {
        setStatus({ loading: false, success: null, message: '' })
      }, 4000)

    } catch (error) {
      clearTimeout(timeoutId)

      setStatus({
        loading: false,
        success: false,
        message:
          error.name === 'AbortError'
            ? 'Server is taking too long. Please try again.'
            : error.message || 'Unable to send message.',
      })
    }
  }

  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Reach out to us for product inquiries, technical support or customized polymer solutions,
          our team will get back to you promptly.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-block">
            <strong>Registered Office</strong>
            <p>
              GAT No. 180/1/b/3, Khudus(Akluj), Tal - Malshiras, Dist - Solapur
              Pin-413113, Maharashtra, India.
            </p>
          </div>

          <div className="info-block">
            <strong>Manufacturing Unit</strong>
            <p>
              GAT No. 180/1/b/3, Khudus(Akluj), Tal - Malshiras, Dist - Solapur
              Pin-413113, Maharashtra, India.
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

          <div className="info-block">
            <strong>GSTIN</strong>
            <p>27BOCPK7849Q1Z1</p>
          </div>

          <div className="info-block">
            <strong>Website</strong>
            <p>www.divijapolymers.co.in</p>
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
              disabled={status.loading}
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
              disabled={status.loading}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status.loading}
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
              disabled={status.loading}
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={
              status.loading ||
              !formData.name ||
              !formData.email ||
              !formData.message
            }
          >
            {status.loading ? 'Sending...' : 'Submit Inquiry'}
          </button>

          {status.message && (
            <p
              className={`form-status ${
                status.success ? 'success' : 'error'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}