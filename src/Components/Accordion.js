import { FaChevronDown } from "react-icons/fa";
import '../Components/style/Accordion.css'; // Importing custom CSS
const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
      <div className="custom-collapse">
        <button onClick={onClick} className="custom-collapse-title-a">
          Q.{title}
          <FaChevronDown className={`arrow-icon ${isOpen ? "rotate" : ""}`} />
        </button>
        <div className={`custom-collapse-content ${isOpen ? "open" : ""}`}>
          <p>{content}</p>
        </div>
      </div>
    );
  };

export default Accordion;