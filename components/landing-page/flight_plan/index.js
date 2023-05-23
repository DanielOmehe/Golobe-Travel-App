import FlightPanel from "./flight-panels"
import FlightTab from "./flight-tabs"

const FlightPlan = ({variant, children}) => {
    return(
        <>
            <div className={variant}>
                <FlightTab> 
                    <FlightPanel title='flights'> This is the flights panel </FlightPanel>
                    <FlightPanel title='hotels'> This is the hotels panel </FlightPanel>
                </FlightTab>
            </div>
            <style jsx> {`
            .landing-page-flight-plan{
                height: 280px;
                width: 1232px;
                left: 160px;
                top: -112px;
                border-radius: 16px;
                padding: 16px 32px 32px 32px;
                background: white;
                box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
                position: absolute;
            }
            `} </style>
        </>
    )
}

export default FlightPlan