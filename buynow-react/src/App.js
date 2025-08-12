import React, { useState } from 'react';
import './styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMotionReduced, setIsMotionReduced] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Toggle reduce motion
  const toggleReduceMotion = () => {
    setIsMotionReduced(!isMotionReduced);
    document.body.classList.toggle("reduce-motion-On");
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="header-container" id="home">
        <div id="header-img">
          <h3 id="profile">BuyNow</h3>
        </div>
        <div className="navigate">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#Discover">Discover</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="header-item">
          <input 
            type="search" 
            id="searchbar" 
            placeholder="Search for Items u want"
          />
          <button type="button" alt="Search_button">
            <img id="searchpicbutton" src="searchbuttonPic.png" alt="Search" />
          </button>
        </div>
        <div className="header-button">
          <button 
            type="button" 
            id="reduce-motion"
            onClick={toggleReduceMotion}
          >
            {isMotionReduced ? "Remove Motion On" : "Remove Motion Off"}
          </button>
          <button 
            type="button" 
            name="DarkModeButton" 
            id="theme-button" 
            title="Toggle Dark Mode"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "Dark Mode On" : "Dark Mode Off"}
          </button>
          <button type="button" id="login">Login</button>
          <button type="button" id="Signup">SignIn</button>
        </div>
      </header>

      {/* About Platform Section */}
      <section id="About-Platform">
        <div className="about-platform-container">
          <div className="about-content">
            <h3>About Our Platform</h3>
            <p className="about-intro">
              <strong>BuyNow</strong> is Cambodia's premier online marketplace, connecting authentic local sellers with customers worldwide.
              Discover the rich cultural heritage of Cambodia through our carefully curated selection of traditional crafts,
              modern products, and unique souvenirs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories">
        <h3>Shop by Categories</h3>
        <div id="image-mainpage">
          <div>
            <h4>Fashion Clothes</h4>
            <img className="mainImage" src="Cloth.jpg" alt="Fashion Clothes" />
          </div>
          <div>
            <h4>Home & Living</h4>
            <img className="mainImage" src="home and living.jpg" alt="Home & Living" />
          </div>
          <div>
            <h4>Food & Beverage</h4>
            <img className="mainImage" src="foond.jpg" alt="Food & Beverage" />
          </div>
          <div>
            <h4>Handcrafts & Art</h4>
            <img className="mainImage" src="Craft.jpg" alt="Handcrafts & Art" />
          </div>
          <div>
            <h4>Souvenir & Gifts</h4>
            <img className="mainImage" src="souvenirs1.webp" alt="Souvenir & Gifts" />
          </div>
          <div>
            <h4>Jewelry & Accessories</h4>
            <img className="mainImage" src="jewerly.jpg" alt="Jewelry & Accessories" />
          </div>
          <div>
            <h4>Books & Culture</h4>
            <img className="mainImage" src="book.webp" alt="Books & Culture" />
          </div>
          <div>
            <h4>Electronics & Gadgets</h4>
            <img className="mainImage" src="electronic.jpg" alt="Electronics & Gadgets" />
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="Discover">
        <h3>Discover</h3>
        <div id="video-section">
          <h4>Watch Our Video</h4>
          <iframe 
            width="560" 
            height="300" 
            src="https://www.youtube.com/embed/ZmJGc0PcbAg"
            title="BuyNow Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Us - Links</h2>
        <p>This is some links that you can learn more about Cambodian culture</p>
        <article className="link_of_article">
          <h3>Information about Cambodia</h3>
          <p>Welcome to Cambodia</p>
          <a href="https://en.wikipedia.org/wiki/Cambodia">Read more about history of Cambodia</a>
        </article>
        <article className="link_of_article">
          <h3>Cambodian Culture and Traditions</h3>
          <p>Explore the vibrant traditions and customs of Cambodia</p>
          <a href="https://www.cambodia.travel/culture">Discover Cambodian Culture</a>
        </article>
        <article className="link_of_article">
          <h3>Traditional Cambodian Arts</h3>
          <p>Learn about traditional arts, crafts, and artistic expressions</p>
          <a href="https://www.cambodia.travel/arts-culture">Explore Traditional Arts</a>
        </article>
      </section>

      {/* RSVP Section */}
      <section id="rsvp">
        <h2>Join Our Cultural Event!</h2>
        <div className="rsvp-container">
          <div className="rsvp-para">
            <h3>Experience Cambodia at BuyNow Cultural Festival</h3>
            <p><strong>📅 When:</strong> March 15-17, 2024</p>
            <p><strong>📍 Where:</strong> BuyNow Cultural Center, Phnom Penh</p>
            <p><strong>🎁 What to Expect:</strong> Traditional food tasting, artisan demonstrations, exclusive discounts, and cultural performances!</p>
            <p><strong>🎟️ Entry:</strong> Free for registered participants</p>
          </div>
          <div className="rsvp-participants">
            <h3>Who's Coming?</h3>
            <p>* Sophea from Siem Reap has RSVP'd for the food tasting experience.</p>
            <p>* Dara from Battambang is excited about the artisan workshops.</p>
            <p>* Rithy from Phnom Penh has RSVP'd for the cultural performance.</p>
          </div>
        </div>

        {/* RSVP Registration Form */}
        <RSVPForm />
      </section>

      {/* Footer */}
      <footer>
        <div className="footer_class">
          <a href="#about">Learn More about Us</a>
          <a href="mailto:contact@buynow.com">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

// RSVP Form Component
function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    groupSize: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thank you ${formData.name}! Your RSVP has been submitted.`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h3>Register for the Event</h3>
      <form id="rsvp-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-register-label">Full Name:</label>
        <input 
          id="name" 
          type="text" 
          name="name" 
          placeholder="Enter your full name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        
        <label htmlFor="email" className="form-register-label">Email Address:</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          placeholder="your.email@example.com" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        
        <label htmlFor="phone" className="form-register-label">Phone Number:</label>
        <input 
          id="phone" 
          type="tel" 
          name="phone" 
          placeholder="(+855)" 
          value={formData.phone}
          onChange={handleChange}
          required 
        />
        
        <label htmlFor="interest" className="form-register-label">What interests you most?</label>
        <select 
          id="interest" 
          name="interest" 
          value={formData.interest}
          onChange={handleChange}
          required
        >
          <option value="">Choose your interest</option>
          <option value="traditional-crafts">Traditional Crafts & Souvenirs</option>
          <option value="food-tasting">Cambodian Food Tasting</option>
          <option value="cultural-performance">Cultural Performances</option>
          <option value="artisan-workshop">Artisan Workshops</option>
          <option value="shopping-discounts">Exclusive Shopping Discounts</option>
        </select>
        
        <label htmlFor="group-size" className="form-register-label">Number of Attendees:</label>
        <input 
          id="group-size" 
          type="number" 
          name="groupSize" 
          min="1" 
          max="10" 
          value={formData.groupSize}
          onChange={handleChange}
          required 
        />
        
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
}

export default App;
