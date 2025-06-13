import React from 'react';
import '../Components/style/CheatsheetCard.css';
import icon from '../Components/photo/icon/default (11).png'

const CheatsheetCard = () => {
  return (
    <div className="cheatsheet-container">
      <h2>Personalised Interview Cheatsheets</h2>
      <p>Based on your profile</p>

      <div className="cheatsheet-cards">
        <div className="blurred-wrapper">
          <div className="card">
            <h4>Question: Tell me about a time when you had to solve a comp...</h4>
            <p>In my previous role at XYZ Corp, I was tasked with optimizing...</p>
          </div>
          <div className="card">
            <h4>Question: How would you design a distributed cache system?</h4>
            <p>When designing a distributed cache system, I would focus on...</p>
          </div>
          <div className="card">
            <h4>Question: How would you design a distributed cache system?</h4>
            <p>When designing a distributed cache system, I would focus on...</p>
          </div>
        </div>

        <div className="lock-overlay">
          <div className="lock-icon">
            <img src={icon} ></img>
          </div>
          <div className="locked-label">Locked</div>
          <div className="locked-msg">This will get unlocked after your interview is completed.</div>
        </div>
      </div>
    </div>
  );
};

export default CheatsheetCard;
