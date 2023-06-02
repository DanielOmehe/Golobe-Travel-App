import { Children, useContext } from "react"
import { TravelPlanTabWrapper } from "./style"
import { FlightPageContext } from "../../../context/landing-page"

const TravelTab =({children})=>{
    // const { activeTab } = useContext(FlightPageContext);
    return(
        <TravelPlanTabWrapper>
            {/* {
                Children.map(children, (child, index) =>(
                    index === activeTab ? child : null
                ))
            } */}
            {children}
        </TravelPlanTabWrapper>
    )
}

export default TravelTab