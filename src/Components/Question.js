import React, { useState } from "react";
import Accordion from "./Accordion"; // Your existing accordion component
import '../Components/style/Question.css'

const Question = () => {
  const [activeTab, setActiveTab] = useState("Technical");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionData = {
    Technical: [
      {
        title: "How do you drive sales in a competitive market?",
        content:
          "By leveraging data analytics, building strong customer relationships, and providing exceptional post-sale support.",
      },
      {
        title: "What CRM tools have you used effectively?",
        content:
          "I’ve worked with HubSpot, Salesforce, and Zoho CRM to manage leads, automate tasks, and track performance.",
      },
      {
        title: "How do you manage a large sales team?",
        content:
          "Through clear communication, performance tracking, regular training, and motivating team members with achievable goals.",
      },
      {
        title: "Explain your approach to sales forecasting.",
        content:
          "I use historical data, market trends, and CRM insights to project sales and adjust strategies proactively.",
      },
      {
        title: "How do you handle technical objections from clients?",
        content:
          "I listen carefully, consult with technical teams, and provide evidence-based explanations or demos to address concerns.",
      },
    ],
    Behavioural: [
      {
        title: "Do you provide any job?",
        content:
          "Yes, we offer roles and internships across development, QA, marketing, and client support based on openings.",
      },
      {
        title: "How do you handle team conflicts?",
        content:
          "I listen to all sides, facilitate open communication, and encourage compromise while keeping team goals in focus.",
      },
      {
        title: "Describe a time you faced failure and how you handled it.",
        content:
          "During a missed deadline, I took accountability, learned from the mistakes, and improved planning processes for future tasks.",
      },
      {
        title: "How do you stay motivated during tough projects?",
        content:
          "I break tasks into smaller milestones, celebrate progress, and remind myself of the project’s bigger impact.",
      },
      {
        title: "Describe your leadership style.",
        content:
          "I’m a collaborative leader who values team input, encourages growth, and adapts based on the team’s needs.",
      },
    ],
    "Mission-vision": [
      {
        title: "What is our company vision?",
        content:
          "To become a global leader in technology services by delivering innovative, sustainable, and scalable solutions.",
      },
      {
        title: "What is the core mission of our company?",
        content:
          "To empower businesses through cutting-edge digital transformation while maintaining a strong customer-first approach.",
      },
      {
        title: "How do we differentiate ourselves from competitors?",
        content:
          "By combining innovation, customer service, and ethical practices to build long-term partnerships and trust.",
      },
      {
        title: "How do we align employees with our mission?",
        content:
          "Through clear communication, internal training, recognition programs, and involving them in strategic goals.",
      },
      {
        title: "Payment Method?",
        content:
          "We accept UPI, NEFT, RTGS, net banking, and major cards. Invoices are generated post-payment for every transaction.",
      },
    ],
  };


  return (
    <div className="question-wrapper">
      <h2>Prepare for the Interview</h2>
      <div className="tab-buttons">
        {Object.keys(questionData).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null); // reset accordion on tab switch
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="accordion-list">
        {questionData[activeTab].map((section, index) => (
          <Accordion
            key={index}
            title={section.title}
            content={section.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
