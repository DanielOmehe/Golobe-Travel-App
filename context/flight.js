import { createContext } from "react";

export const FlightPageContext = createContext(null);

const FlightContext =({children})=>{
    return (
        <FlightPageContext.Provider>{children}</FlightPageContext.Provider>
    )
}

export default FlightContext