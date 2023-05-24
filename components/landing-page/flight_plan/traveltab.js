import { Children, useContext } from "react"
import { TravelPlanTabWrapper } from "./style"
import { LandingPageContext } from "../../../context/landing-page"

const TravelTab =({children})=>{
    const { activeTab } = useContext(LandingPageContext);
    return(
        <TravelPlanTabWrapper>
            {
                Children.map(children, (child, index) =>(
                    index === activeTab ? child : null
                ))
            }
        </TravelPlanTabWrapper>
    )
}

export default TravelTab