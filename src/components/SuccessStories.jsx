import './SuccessStories.css'

const stories = [
  {
    quote: 'The mentorship and projects helped me land my first freelance client within weeks.',
    name: 'Hanna Tadesse',
    role: 'UI/UX Designer',
    rating: '5.0',
  },
  {
    quote: 'I went from beginner to building real AI tools with confidence and clarity.',
    name: 'Mikias Solomon',
    role: 'AI Automation Specialist',
    rating: '4.9',
  },
  {
    quote: 'The course structure was clear, practical, and motivating from day one.',
    name: 'Lidia Bekele',
    role: 'Frontend Developer',
    rating: '5.0',
  },
]

function SuccessStories() {
  return (
    <section id="success-stories" className="section-shell success-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">Success Stories</p>
          <h2>Real progress from real learners</h2>
          <p>Students trust our learning experience to grow faster and build stronger portfolios.</p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.name}>
              <div className="stars">★★★★★</div>
              <p className="quote">“{story.quote}”</p>
              <div className="story-footer">
                <strong>{story.name}</strong>
                <span>{story.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
