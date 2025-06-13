import React, { useState } from "react";
import Navbar from "./Components/navBar";
import SearchBar from "./Components/SearchBar";
import HeaderCard from "./Components/header";
import InterviewSection from "./Components/InterviewSection";
import CheatsheetCard from "./Components/CheatsheetCard";
import Question from "./Components/Question";
import InterviewPerks from "./Components/InterviewPerks";
import Footer from "./Components/Footer";


function App() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <>
      <Navbar onSearchToggle={toggleSearchBar} />
      {showSearch && <SearchBar />}
      <HeaderCard/>
      <InterviewSection/>
      <CheatsheetCard/>
      <Question/>
      <InterviewPerks/>
      <Footer/>
    </>
  );
}

export default App;
