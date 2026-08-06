import './About.css'

function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-container about-grid">
        <div>
          <p className="section-eyebrow">About Us</p>
          <h2>OUR FUTURE VISION</h2>
          <p className="about-text">
            We believe every learner deserves a clear path to build real skills, confidence, and opportunity.
            Our mission is to make practical education feel inspiring, modern, and directly useful.
          </p>
        </div>

        <div className="values-card">
          <h3>What drives us</h3>
          <ul>
            <li>Practical, project-based learning</li>
            <li>Supportive mentorship and feedback</li>
            <li>Career-focused growth for every learner</li>
            <li>Inclusive access to modern digital skills</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
