import { Fragment } from 'react'

const FlightPlanComponent = ({variant}) => {
    return(
        <Fragment>
            <div className={variant}>

            </div>
            <style jsx> {`
            .flight-plan{
                height: 280px;
                width: 1232px;
                left: 104px;
                top: 532px;
                border-radius: 16px;
                padding: 16px 32px 32px 32px;
                background: white;
                border: 1px solid black;
                position: absolute;
                top: -100px;
                left: 154px;
            }
            `} </style>
        </Fragment>
    )
}

export default FlightPlanComponent