import React, { useState, useEffect } from 'react'
import './Instructors.css'

// 1. Suuraawwan local ta'an import godhaa
import mosisaImg from '../assets/mosisa.png'
import negasaImg from '../assets/negasa.png'

// Array instructor-oota sirreeffame
const instructors = [
  {
    id: 1,
    name: 'Mosisa Shifaraw',
    title: 'AI Product Strategist',
    rating: '4.9',
    students: '12,400+',
    coursesCount: 8,
    avatar: mosisaImg,
    bio: 'Specializes in Large Language Models & Deep Learning application architecture.',
  },
  {
    id: 2,
    name: 'Negasa Chala',
    title: 'Senior Web Engineer',
    rating: '4.8',
    students: '18,900+',
    coursesCount: 12,
    avatar: negasaImg,
    bio: 'Full-stack developer building enterprise web apps and cloud scalable microservices.',
  },
  {
    id: 3,
    name: 'Selam Tesfaye',
    title: 'UX Lead & Mentor',
    rating: '5.0',
    students: '9,500+',
    coursesCount: 6,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    bio: 'Passionate about human-centered design, prototyping, and accessibility principles.',
  },
  {
    id: 4,
    name: 'Noah Yusuf',
    title: 'Cyber Security Advisor',
    rating: '4.7',
    students: '14,200+',
    coursesCount: 9,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    bio: 'Ethical hacker and security analyst with 8+ years of enterprise defense experience.',
  },
]

function Instructors() {
  const [activeChatInstructor, setActiveChatInstructor] = useState(null)
  const [chatMessage, setChatMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])

  // 1. BACK / CLOSE HANDLER (Chat cufuuf)
  const handleCloseChat = () => {
    setActiveChatInstructor(null)
  }

  // 2. KEYBOARD ESC & BROWSER BACK BUTTON HANDLING
  useEffect(() => {
    if (!activeChatInstructor) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseChat()
      }
    }

    window.history.pushState({ chatOpen: true }, '')
    const handlePopState = () => {
      handleCloseChat()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [activeChatInstructor])

  const handleOpenChat = (instructor) => {
    setActiveChatInstructor(instructor)
    setChatHistory([
      { sender: 'instructor', text: `Akkam! Maqaan koo ${instructor.name}. Gaaffii barnoota koo irratti qabdu na gaafachuu danda'ta!` }
    ])
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!chatMessage.trim()) return

    setChatHistory((prev) => [...prev, { sender: 'user', text: chatMessage }])
    const userText = chatMessage
    setChatMessage('')

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { sender: 'instructor', text: `Galatoomi gaaffii keef! "<i>${userText}</i>" irratti deebii gabaabaa keessa isaa sii erga.` }
      ])
    }, 1000)
  }

  return (
    <section id="instructors" className="section-shell instructors-section">
      <div className="section-container">
        {/* HEADER */}
        <div className="section-header">
          <span className="section-tag">BARSIISOTA KEENYA</span>
          <h2>Barsiisota <span className="glow">Muxannoo Qaban</span> Irraa Baradhu</h2>
          <p>Barsiisota hojii qabataamaa fi saayinsii ammayyaatiin sektera isaaniitti sadarkaa olaanaa qaban.</p>
        </div>

        {/* INSTRUCTORS GRID */}
        <div className="instructors-grid">
          {instructors.map((instructor) => (
            <article className="instructor-card" key={instructor.id}>
              <div className="avatar-wrapper">
                <img src={instructor.avatar} alt={instructor.name} className="instructor-img" />
                <span className="online-badge"></span>
              </div>

              <h3>{instructor.name}</h3>
              <p className="instructor-title">{instructor.title}</p>
              <p className="instructor-bio">{instructor.bio}</p>

              <div className="stats-row">
                <div className="stat">
                  <span className="stat-value">⭐ {instructor.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{instructor.students}</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{instructor.coursesCount}</span>
                  <span className="stat-label">Courses</span>
                </div>
              </div>

              <button className="chat-btn" onClick={() => handleOpenChat(instructor)}>
                💬 Chat with {instructor.name.split(' ')[0]}
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* CHAT MODAL WITH INSTRUCTOR */}
      {activeChatInstructor && (
        <div className="modal-overlay" onClick={handleCloseChat}>
          <div className="chat-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="chat-modal-header">
              <div className="chat-user-info">
                <button className="back-nav-btn" onClick={handleCloseChat} title="Back">
                  ← Back
                </button>
                <img src={activeChatInstructor.avatar} alt={activeChatInstructor.name} className="modal-avatar" />
                <div>
                  <h4>{activeChatInstructor.name}</h4>
                  <span className="online-text">🟢 Online Now</span>
                </div>
              </div>
              <button className="close-btn" onClick={handleCloseChat}>✕</button>
            </div>

            <div className="chat-body">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`chat-bubble ${msg.sender}`}>
                  <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="chat-footer">
              <input
                type="text"
                placeholder="Gaaffii kee asitti barreessi..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <button type="submit" className="btn gradient">Ergi</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Instructors