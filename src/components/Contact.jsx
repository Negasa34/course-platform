import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="section-container contact-grid">
        <div>
          <p className="section-eyebrow">Contact Us</p>
          <h2>Let’s build your next learning chapter together</h2>
          <p className="contact-text">
            Need help choosing a path, planning a team program, or asking about admissions? Send us a note.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Message" />
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
