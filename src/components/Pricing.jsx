import React, { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    id: 'free',
    name: 'Free Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for getting started with beginner-friendly lessons.',
    features: ['1 Beginner course access', 'Community forum access', 'Weekly newsletter tips', 'Limited exercise files'],
    featured: false,
    ctaText: 'Galmeeffami (Free)',
  },
  {
    id: 'pro',
    name: 'Pro Learner',
    monthlyPrice: 29,
    yearlyPrice: 24, // Discounted price per month
    description: 'Best for serious learners who want deeper guidance and projects.',
    features: ['Unlimited course access', 'Live mentor Q&A sessions', 'Certificates of completion', 'Downloadable resources', 'Offline view on mobile'],
    featured: true,
    ctaText: 'Pro Bahi (Kafali)',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For teams and organizations that want structured learning at scale.',
    features: ['Team analytics dashboard', 'Private instructor cohorts', 'Priority 24/7 support', 'Custom learning paths', 'LMS integration'],
    featured: false,
    ctaText: 'Team Keef Bitadhu',
  },
]

function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)
  const [, setSelectedPlan] = useState(null)

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (couponCode.trim().toUpperCase() === 'FUTURE20' || couponCode.trim().toUpperCase() === 'FREEPASS') {
      setDiscountApplied(true)
    } else {
      alert('Coupon code sirrii miti! (Fakkeenya: FUTURE20 gチmisi)')
    }
  }

  return (
    <section id="pricing" className="section-shell pricing-section">
      <div className="section-container">
        
        {/* HEADER */}
        <div className="section-header">
          <span className="section-tag">KAFALTIIWWAN KEENYA</span>
          <h2>Gatiifi Karoora <span className="glow">Mijataa</span> Filadhu</h2>
          <p>Dandeettii kee as irraa eegali; kafaltii tokkoon barnoota dhiyeenya keenya mara argadhu.</p>
          
          {/* MONTHLY / YEARLY TOGGLE */}
          <div className="billing-toggle-container">
            <span className={!isYearly ? 'active' : ''}>Ji'aan (Monthly)</span>
            <label className="switch">
              <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
              <span className="slider round"></span>
            </label>
            <span className={isYearly ? 'active' : ''}>
              Waggaan (Yearly) <span className="discount-badge">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="pricing-grid">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            return (
              <article className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.id}>
                {plan.featured && <div className="popular-ribbon">Most Popular</div>}
                
                <div className="plan-top">
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="price-display">
                  <span className="currency">$</span>
                  <span className="amount">{discountApplied && price > 0 ? (price * 0.8).toFixed(0) : price}</span>
                  <span className="period">{price === 0 ? '' : isYearly ? '/mo (yearly)' : '/mo'}</span>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`btn ${plan.featured ? 'gradient' : 'outline-btn'}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  {plan.ctaText}
                </button>
              </article>
            )
          })}
        </div>

        {/* COUPON & PAYMENT METHODS SECTION */}
        <div className="pricing-extra-box">
          
          {/* COUPON INPUT */}
          <div className="coupon-card">
            <h4>🎟️ Coupon Code Qabduu?</h4>
            <p>Discount ykn barnoota bilisaa argachuuf koodii keessan asitti galchaa.</p>
            <form onSubmit={handleApplyCoupon} className="coupon-form">
              <input
                type="text"
                placeholder="Fakkeenya: FUTURE20"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button type="submit" className="btn-coupon">Apply</button>
            </form>
            {discountApplied && <p className="coupon-success">🎉 Coupon milkaa'inaan hojjeteera! 20% Discount argattaniirtu.</p>}
          </div>

          {/* ACCEPTED PAYMENT METHODS */}
          <div className="payment-methods-card">
            <h4>💳 Karaalee Kafaltii Raggasise</h4>
            <p>Bifa salphaa fi amansiisaa ta'een kafaltii raawwachuu danda'tu.</p>
            <div className="payment-icons">
              <span className="pay-badge telebirr">Telebirr</span>
              <span className="pay-badge cbe">CBE Birr</span>
              <span className="pay-badge visa">VISA</span>
              <span className="pay-badge mastercard">MasterCard</span>
              <span className="pay-badge paypal">PayPal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Pricing
