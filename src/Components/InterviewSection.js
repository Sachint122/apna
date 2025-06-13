import React, { useRef } from 'react';
import '../Components/style/interviewSection.css';
import i1 from '../Components/photo/icon/default (4).png'
import i2 from '../Components/photo/icon/default (3).png'
import i3 from '../Components/photo/icon/default (6).png'
import i4 from '../Components/photo/icon/default (5).png'

const InterviewSection = () => {
    const shareText = encodeURIComponent(
        "Did a mock interview using Apna's AI job prep tool today, and wow! Super useful feedback in just 10 minutes. Try it now"
    );
    const shareURL = encodeURIComponent(
        "https://apna.co/interview-prep/mock-interview/icicibank-headoffieldsales"
    );
    const inputRef = useRef(null);

    const handleCopy = () => {
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value)
                .then(() => {
                    alert("Link copied successfully!");
                })
        }
    };
    

    return (
        <div className="interview-container">
            {/* Left: About Section */}
            <div className="about-section">
                <p className="about-title">About this interview</p>
                <p className="about-description">
                    Get an opportunity to get interviewed for ICICI Bank’s Head of Field Sales.
                    Together with technical questions, get insights about company values and culture.
                </p>
            </div>

            {/* Right: Social Share */}
            <div className="social-share">
                <h3 style={{ textAlign: 'left' }}>Share with Friends</h3>
                <div className='social-main'>
                    <div>
                        <a
                            href={`https://wa.me/?text=${shareText}%20${shareURL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on WhatsApp"
                        >
                            <img src={i1} alt="WhatsApp" />
                        </a>
                    </div>
                    <div>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                        >
                            <img src={i2} alt="Facebook" />
                        </a>
                    </div>
                    <div>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareURL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                        >
                            <img src={i3} alt="LinkedIn" />
                        </a>
                    </div>
                    <div>
                        <a
                            href={`https://x.com/intent/tweet?url=${shareURL}&text=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Twitter"
                        >
                            <img src={i4} alt="Twitter/X" />
                        </a>
                    </div>
                </div>
                <hr />
                <h5 style={{ textAlign: 'center', color: 'purple' }}>or copy link</h5>
                <div className='link-form'>
                    <input
                        ref={inputRef}
                        value={shareURL}
                        readOnly
                        onFocus={(e) => e.target.select()}
                    />
                    <button onClick={handleCopy}>Copy Link</button>
                </div>
            </div>
        </div>
    );
};

export default InterviewSection;
