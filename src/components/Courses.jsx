import React from 'react';
import './Courses.css';

const Courses = () => {
  const courseList = [
    {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp',
      category: 'Programming',
      price: '$49.99',
      originalPrice: '$89.99',
      rating: '4.9',
      reviews: '1,240',
      instructor: 'Dr. Chala Olani',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      lessons: '42 Lessons',
      duration: '38h 15m',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Artificial Intelligence & Machine Learning',
      category: 'Data Science',
      price: '$59.99',
      originalPrice: '$119.99',
      rating: '4.8',
      reviews: '890',
      instructor: 'Abebe Bikila',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
      lessons: '58 Lessons',
      duration: '45h 30m',
      level: 'Intermediate',
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass & Figma Pro',
      category: 'Design',
      price: '$39.99',
      originalPrice: '$79.99',
      rating: '4.7',
      reviews: '650',
      instructor: 'Sara Worku',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
      lessons: '30 Lessons',
      duration: '22h 10m',
      level: 'All Levels',
    },
    {
      id: 4,
      title: 'Motion Graphics & Video Editing Mastery',
      category: 'Media Production',
      price: '$44.99',
      originalPrice: '$94.99',
      rating: '4.9',
      reviews: '920',
      instructor: 'Kaleb Tadesse',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
      lessons: '36 Lessons',
      duration: '29h 45m',
      level: 'Intermediate',
    }
  ];

  return (
    <section id="courses" className="section-shell courses-section">
      <div className="courses-container">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-tag">BOORA'ANAKAA</span>
          <h2>Koorsiiwwan <span className="glow">Fayyadamoo & Popular</span></h2>
          <p>Dandeettii kee ol kaasuuf koorsiiwwan babal'oo kanneen sekonda muraasa keessatti filadhu.</p>
        </div>

        {/* COURSES GRID */}
        <div className="courses-grid">
          {courseList.map((course) => (
            <div className="course-item-card" key={course.id}>
              
              {/* THUMBNAIL & BADGES */}
              <div className="card-thumb-wrapper">
                <img src={course.thumbnail} alt={course.title} className="card-thumb" />
                <span className="card-badge">{course.category}</span>
                <span className="card-level">{course.level}</span>
              </div>

              {/* CARD BODY */}
              <div className="card-body">
                <div className="card-meta">
                  <span>📚 {course.lessons}</span>
                  <span>⏱️ {course.duration}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>

                {/* INSTRUCTOR DETAILS */}
                <div className="instructor-info">
                  <img src={course.avatar} alt={course.instructor} className="instructor-avatar" />
                  <span className="instructor-name">{course.instructor}</span>
                </div>

                {/* RATING */}
                <div className="card-rating">
                  <span className="stars">⭐ {course.rating}</span>
                  <span className="reviews">({course.reviews} reviews)</span>
                </div>

                {/* FOOTER: PRICE & ACTION */}
                <div className="card-footer">
                  <div className="price-box">
                    <span className="price">{course.price}</span>
                    {course.originalPrice && (
                      <span className="original-price">{course.originalPrice}</span>
                    )}
                  </div>
                  <button className="btn gradient enroll-btn">Amma Galmeeffami →</button>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Courses;