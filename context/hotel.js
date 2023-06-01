import { createContext } from "react";

export const HotelPageContext = createContext(null);

const HotelContext =({children})=>{
    return (
        <HotelPageContext.Provider>{children}</HotelPageContext.Provider>
    )
}

export default HotelContext