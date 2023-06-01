import { useState, createContext } from "react";

export const LandingPageContext = createContext(null);

const LandingContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHome, setIsHome] = useState(false);
  const switchTab =(id)=>{
    setActiveTab(id)
  }
  return (
    <LandingPageContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingContext;