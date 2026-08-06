import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Categories from './components/Categories'
import Instructors from './components/Instructors'
import SuccessStories from './components/SuccessStories'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import bgVideo from './assets/wbsite ba.mp4'

const COURSES = [
  'Artificial Intelligence',
  'Web Development',
  'Motion Graphics',
  'UI/UX Design',
  'Programming',
  'Video Editing',
  'Graphic Design',
  'Digital Marketing',
  'Cyber Security',
  'Cloud Computing',
  'Data Science',
  'Freelancing',
]

function App() {
  const [signedIn, setSignedIn] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showEnrollForm, setShowEnrollForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState(null)

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [enrollData, setEnrollData] = useState({
    fullName: '',
    email: '',
    course: '',
    experience: 'beginner',
  })

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEnrollChange = (e) => {
    const { name, value } = e.target
    setEnrollData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (loginData.email && loginData.password) {
      setSignedIn(true)
      setShowLoginForm(false)
      setLoginData({ email: '', password: '' })
      alert('Nagaan seentanittu!')
    }
  }

  const handleEnrollSubmit = (e) => {
    e.preventDefault()
    if (enrollData.fullName && enrollData.email && enrollData.course) {
      setShowEnrollForm(false)
      setEnrollData({ fullName: '', email: '', course: '', experience: 'beginner' })
      alert(`Baga gammadde! ${enrollData.course} galmooftettaa!`)
    }
  }

  return (
    <div className="app-main-container">
      {/* GLOBAL BACKGROUND VIDEO */}
      <div className="video-bg-wrapper">
        <video autoPlay loop muted playsInline className="global-bg-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* MAIN CONTENT */}
      <div className="app-content">
        <Hero
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
          showEnrollForm={showEnrollForm}
          setShowEnrollForm={setShowEnrollForm}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          loginData={loginData}
          setLoginData={setLoginData}
          enrollData={enrollData}
          setEnrollData={setEnrollData}
          handleLoginChange={handleLoginChange}
          handleEnrollChange={handleEnrollChange}
          handleLoginSubmit={handleLoginSubmit}
          handleEnrollSubmit={handleEnrollSubmit}
        />

        <section id="courses"><Courses /></section>
        <section id="categories"><Categories /></section>
        <section id="instructors"><Instructors /></section>
        <section id="success-stories"><SuccessStories /></section>
        <section id="pricing"><Pricing /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>

        {/* FOOTER */}
        <footer className="udemy-footer">
          <div className="footer-top">
            <div className="footer-banner">
              <h3>Top companies choose <span className="highlight">OUR FUTURE VISION</span> to build in-demand career skills.</h3>
            </div>
            <div className="footer-grid">
              <div className="footer-col">
                <h4>Business & Skills</h4>
                <ul>
                  <li><a href="#courses">Web Development</a></li>
                  <li><a href="#courses">Artificial Intelligence</a></li>
                  <li><a href="#courses">UI/UX Design</a></li>
                  <li><a href="#courses">Cyber Security</a></li>
                  <li><a href="#courses">Data Science</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Quick Navigation</h4>
                <ul>
                  <li><a href="#categories">Categories</a></li>
                  <li><a href="#instructors">Instructors</a></li>
                  <li><a href="#success-stories">Success Stories</a></li>
                  <li><a href="#pricing">Pricing Plans</a></li>
                  <li><a href="#about">About Us</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Support & Community</h4>
                <ul>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#">Help and Support</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                  <li><a href="#">Terms & Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-brand">
              <span className="brand-logo">OUR FUTURE VISION</span>
              <p>© 2026 OUR FUTURE VISION, Inc. All rights reserved.</p>
            </div>
            <div className="footer-lang">
              <button className="lang-btn">🌐 Afaan Oromoo / English</button>
            </div>
          </div>
        </footer>
      </div>

      {/* LOGIN MODAL */}
      {showLoginForm && (
        <div className="modal-overlay" onClick={() => setShowLoginForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowLoginForm(false)}>✕</button>
            <h2>ol seenaa!</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="ourvision@example.com" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} placeholder="••••••••" required />
              </div>
              <button type="submit" className="btn primary form-submit">Seena Galuu</button>
            </form>
          </div>
        </div>
      )}

      {/* ENROLLMENT MODAL */}
      {showEnrollForm && (
        <div className="modal-overlay" onClick={() => setShowEnrollForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowEnrollForm(false)}>✕</button>
            <h2>Galmaa'i Barnoota Jalqabi</h2>
            <form onSubmit={handleEnrollSubmit}>
              <div className="form-group">
                <label>Maqaa Guutuu</label>
                <input type="text" name="fullName" value={enrollData.fullName} onChange={handleEnrollChange} placeholder="Maqaa keessan" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={enrollData.email} onChange={handleEnrollChange} placeholder="kaani@example.com" required />
              </div>
              <div className="form-group">
                <label>Barnoota Filadhu</label>
                <select name="course" value={enrollData.course} onChange={handleEnrollChange} required>
                  <option value="">-- Filaa --</option>
                  {COURSES.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Gaddisa Dandeettii</label>
                <select name="experience" value={enrollData.experience} onChange={handleEnrollChange}>
                  <option value="beginner">Jalqabaa (Beginner)</option>
                  <option value="intermediate">Gidduugaleessa (Intermediate)</option>
                  <option value="advanced">Olaanaa (Advanced)</option>
                </select>
              </div>
              <button type="submit" className="btn gradient form-submit">Amma Jalqabi →</button>
            </form>
          </div>
        </div>
      )}

      {/* SELECTED COURSE MODAL */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCourse(null)}>✕</button>
            <h2>{selectedCourse}</h2>
            <p>Barnoota kana filattanii jirtu. Barnooti kun hojii qabataamaa fi pirojektoota gurguddoo of keessatti qaba.</p>
            <button
              className="btn primary form-submit"
              onClick={() => {
                setEnrollData((prev) => ({ ...prev, course: selectedCourse }))
                setSelectedCourse(null)
                setShowEnrollForm(true)
              }}
            >
              Amma Galmeeffami
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
