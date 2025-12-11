import './App.css'

function App() {
  return (
    <div className="coming-soon-container">
      <div className="content-wrapper">
        {/* Logo Section */}
        <div className="logo-section">
          {/* <div className="logo">
            <span className="logo-jl">JL</span>
            <span className="logo-7">7</span>
          </div> */}
          <div className="company-name">
            <span className="corel">COREL</span>
            <span className="photo">PHOTO</span>
          </div>
          <div className="kannada-name">ಕೋರಲ್ ಫೋಟೋ</div>
        </div>

        {/* Tagline */}
        <div className="tagline">A UNIT OF VALUE OCCASION</div>

        {/* Coming Soon Message */}
        <div className="coming-soon-message">
          <h1>Coming Soon</h1>
          <p>We're working on something amazing!</p>
        </div>

        {/* Photo Section */}
        <div className="photo-section">
          <div className="photo-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop" 
              alt="Corel Photo" 
              className="main-photo"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-section">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Address:</strong> #88, 5th Cross Road, Aralu Mallige Parthasarathy Rd, 
              Beside Desi Angadi, Nagendra Block, Banashankari 1st Stage, 
              Banashankari, Bengaluru- 560050
            </div>
            <div className="contact-item">
              <strong>Mob:</strong> +91 73380 46069 / +91 96112 35211
            </div>
            <div className="contact-item">
              <strong>Mail:</strong> info.corelphoto@gmail.com
            </div>
            <div className="contact-item">
              <strong>Web:</strong> www.corelphoto.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
