import { useState, createContext } from "react";

export const LandingPageContext = createContext(null);

const LandingContext = ({ children }) => {
  const [currentTab, setCurrentTab] = useState('');

  const switchTab =(e)=>{
    setCurrentTab(e.target.offsetLeft);
  }
  return (
    <LandingPageContext.Provider value={{ currentTab, switchTab }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingContext;