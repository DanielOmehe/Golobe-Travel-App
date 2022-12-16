import { Fragment } from "react";


const FindComponent = ({children})=>{
    return(
        <Fragment>
            <div className="find" >
            {children}
            </div>
        </Fragment>
    )
}

export default FindComponent