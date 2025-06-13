import React from 'react';
import '../Components/style/Navbar.css';
import logo from '../Components/photo/logo.png'
import t from '../Components/photo/thumbnail-1-0.png'

const Navbar = ({ onSearchToggle }) => {
  const cities = [
    "Agra", "Ahmedabad", "Ahmednagar", "Ajmer", "Aligarh",
    "Amritsar", "Asansol", "Aurangabad", "Bareilly", "Belagavi",
    "Bengaluru", "Bhavnagar", "Bhilai", "Bhopal", "Bhubaneswar", "Bikaner"
  ];
  const departments = [
    "Admin / Back Office",
    "Advertising / Communication",
    "Aviation & Aerospace",
    "Banking / Insurance",
    "Beauty, Fitness & Wellness",
    "Construction & Site Engineering",
    "Consulting",
    "Content, Editorial & Journalism",
    "CSR & Social Services",
    "Customer Support",
    "Data Science & Analytics",
    "Delivery / Driver Services",
    "Domestic Worker",
    "Energy & Mining",
    "Engineering - Hardware",
    "Environment Health & Safety"
  ];
  const companies = [
    "Blinkit Private Li...",
    "Swiggy",
    "Paytm",
    "Altruist Technolog...",
    "Big Basket",
    "Zepto",
    "Aditya Birla Capit...",
    "Bajaj Allianz Life...",
    "Blinkit Grocery",
    "2Coms Consulting P...",
    "PhonePe",
    "Zomato",
    "Starconnect Busine...",
    "Aakash Educational...",
    "Netambit Infosourc...",
    "Randstad India Pri..."
  ];
  const otherLinks = [
    "Free Job Alert",
    "Download Apna app",
    "Blog",
    "Contact Us"
  ];
  const educationJobs = [
    "10th Pass Jobs",
    "12th Pass Jobs",
    "Diploma Jobs",
    "ITI Jobs",
    "Graduate Jobs",
    "Post Graduate Jobs"
  ];
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />

        {/* Jobs Dropdown */}
        <div className="dropdown">
          <div className="dropdown-trigger">Jobs ▾</div>
          <div className="dropdown-content">
            <div className="dropdown-col hide-mobile">
              <a href="#">Work From Home Jobs</a>
              <a href="#">Part Time Jobs</a>
              <a href="#">Freshers Jobs</a>
              <a href="#">Jobs for Women</a>
              <a href="#">Full Time Jobs</a>
              <a href="#">Night Shift Jobs</a>
            </div>
            <div className="dropdown-col">
              <div className="hover-parent">
                <a href="#">Jobs By City ▸</a>
                <div className="hover-child">
                  {cities.map((city) => (
                    <a href="#" key={city}>
                      Jobs in {city}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hover-parent">
                <a href="#">Jobs By Department ▸</a>
                <div className="hover-child">
                  {departments.map((dept) => (
                    <a href="#" key={dept}>
                      {dept.length > 22 ? `${dept.slice(0, 22)}...` : dept}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hover-parent">
                <a href="#">Top Companies ▸</a>
                <div className="hover-child">
                  {companies.map((company, index) => (
                    <a key={index} href="#">{company}</a>
                  ))}
                </div>
              </div>
              <div className="hover-parent">
                <a href="#">Jobs by Education ▸</a>
                <div className="hover-child">
                  {educationJobs.map((job, index) => (
                    <a key={index} href="#">{job}</a>
                  ))}
                </div>
              </div>
              <div className="hover-parent">
                <a href="#">More Links ▸</a>
                <div className="hover-child">
                  {otherLinks.map((link, index) => (
                    <a key={index} href="#">{link}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Static Links with NEW Badges */}
        <div className="nav-item">Job Prep <span className="new-badge">NEW</span></div>
        <div className="nav-item">Contests <span className="new-badge">NEW</span></div>
        <div className="nav-item">Degree <span className="new-badge">NEW</span></div>

        {/* Resume Tools Dropdown */}
        <div className="dropdown">
          <div className="dropdown-trigger">Resume Tools ▾</div>

          <div className="resume-dropdown-content">
            {/* Left Section */}
            <div className="resume-left">
              <a href='#' className="resume-item">

                <div>
                  <div className="resume-title">AI Resume builder</div>
                  <div className="resume-desc">Create your best resume using AI</div>
                </div>
              </a>

              <a href='#' className="resume-item">
              
                <div>
                  <div className="resume-title">AI Resume checker</div>
                  <div className="resume-desc">Get instant resume feedback</div>
                </div>
              </a>

              <a href='#' className="resume-item">
                
                <div>
                  <div className="resume-title">AI Cover letter generator</div>
                  <div className="resume-desc">Stand out and get hired faster</div>
                </div>
              </a>

              <a href='#' className="resume-item">
               
                <div>
                  <div className="resume-title">Blog</div>
                  <div className="resume-desc">Guidance for securing your dream job</div>
                </div>
              </a>
            </div>

            {/* Right Section */}
            <a href='#' className="resume-right">
              <img src={t} alt="Video Guide" className="resume-video-thumb" />
              <div className="resume-video-text">
                <div className="resume-video-title">Level up your resume: Watch our career compass video guide.</div>
                <a href="#" className="resume-watch-link">Watch video →</a>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Right-side: Search + Buttons */}
      <div className="navbar-right">
        {/* Add the button to show/hide search bar */}
        <button className="toggle-search-btn" onClick={onSearchToggle}>
          🔍 Search
        </button>
        <a href="#" className="login-link">Employer Login</a>
        <button className="login-btn">Candidate Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
