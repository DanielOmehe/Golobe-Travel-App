import { Fragment } from "react";
import { NavBar } from ".";

const HeaderComponent = ({variant, image})=>{
    return(
        <Fragment>
            <header className={variant}>
                <NavBar variant='landing-page-nav' />
                <div className="container">
                    <div className="row"></div>
                </div>
            </header>
            <style jsx> {`
            .landing-page-header{
                width: 100%;
                height: 100vh;
                background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(/images/background.png) no-repeat;
                background-size: cover;
                background-position: center;
            }
            `} </style>
        </Fragment>
    )
}

export default HeaderComponent