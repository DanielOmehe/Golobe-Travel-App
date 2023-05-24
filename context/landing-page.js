import { useState, createContext } from "react";

export const LandingPageContext = createContext(null);

const LandingContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [slide, setSlide] = useState(false)
  const switchTab =(id, e)=>{
    setActiveTab(id)
    if(id > 0){
      setSlide(true)
    }else{
      setSlide(false)
    }
  }
  return (
    <LandingPageContext.Provider value={{ activeTab, slide, switchTab }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingContext;