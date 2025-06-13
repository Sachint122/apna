import React from 'react';
import '../Components/style/header.css';
import logo from '../Components/photo/image.png'

const HeaderCard = () => {
  return (
    <div className="header-card-wrapper">
      <div className="header-card-left">
        <div className="overlay"></div> {/* Background overlay only for left */}
        <div className="header-left-content">
          <img src={logo} alt="Company Logo" className="header-logo" />
          <div>
            <h2 className="job-title">Head of Field Sales</h2>
            <p className="company-name">at ICICI Bank</p>
          </div>
        </div>
      </div>

      <div className="header-card-right">
        {/* your right section unchanged */}
        <h4>Rating and Reviews</h4>
        <div className="ratings">
          <div className='main'>
            <div className='rating-logo'><span>📞</span></div>
            <div><strong>246</strong><div>Preps</div></div>
          </div>
          <div className='main'>
            <div className='rating-logo'><span>💜</span></div>
            <div><strong>82%</strong><div>Found helpful</div></div>
          </div>
          <div className='main'>
            <div className='rating-logo'><span>⭐</span></div>
            <div><strong>81</strong><div>Reviews</div></div>
          </div>
        </div>
        <p className="slot-info">10 mins interview slot available</p>
        <button className="start-interview-btn">Start Interview</button>
      </div>
    </div>


  );
};

export default HeaderCard;
