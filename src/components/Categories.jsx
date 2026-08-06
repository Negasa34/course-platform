import './Categories.css'

const categories = [
  {
    name: 'Artificial Intelligence',
    description: 'Build intelligent systems and automate real-world workflows.',
    icon: '🤖',
    level: 'Trending',
  },
  {
    name: 'Web Development',
    description: 'Create modern, responsive websites and full-stack products.',
    icon: '💻',
    level: 'In Demand',
  },
  {
    name: 'UI/UX Design',
    description: 'Design accessible interfaces with strong user-centered thinking.',
    icon: '🎨',
    level: 'Creative',
  },
  {
    name: 'Cyber Security',
    description: 'Protect systems, data, and teams from evolving digital threats.',
    icon: '🔐',
    level: 'High Impact',
  },
  {
    name: 'Motion Graphics',
    description: 'Shape stories with animation, sound, and cinematic visuals.',
    icon: '✨',
    level: 'Visual',
  },
  {
    name: 'Marketing & Growth',
    description: 'Learn branding, funnels, and digital storytelling for modern brands.',
    icon: '📈',
    level: 'Growth',
  },
]

function Categories() {
  return (
    <section id="categories" className="section-shell categories-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">Popular Categories</p>
          <h2>Choose the path that fits your next move</h2>
          <p>Explore hands-on learning tracks crafted for ambitious learners and fast-moving teams.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="category-pill">{category.level}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
