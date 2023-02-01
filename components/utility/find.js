import { Fragment } from "react";


const Find = ({children})=>{
    return(
        <Fragment>
            <div className="find" >
            {children}
            </div>
            <style jsx> {`
            .find{
                height: 24px;
                width: 240px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                border: 1px solid white;
            }
            `} </style>
        </Fragment>
    )
}

export default Find