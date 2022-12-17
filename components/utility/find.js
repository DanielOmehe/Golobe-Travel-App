import { Fragment } from "react";


const FindComponent = ({children})=>{
    return(
        <Fragment>
            <div className="find" >
            {children}
            </div>
            <style jsx> {`
            .find{
                height: 24px;
                width: 107px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
            }
            
            `} </style>
        </Fragment>
    )
}

export default FindComponent