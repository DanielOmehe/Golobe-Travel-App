import { Fragment } from "react";
import NavBar from './navbar'
import Text from "../text";

const Header = ({variant, container, row})=>{
    return(
        <Fragment>
            <header className={variant}>
                <NavBar variant='landing-page-nav' />
                <div className={container}>
                    <div className={row}>
                        <Text variant='helping' > Helping Others </Text>
                        <Text variant='live' > LIVE & TRAVEL </Text>
                        <Text variant='offers' > Special Offers to suit Your plan </Text>
                    </div>
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
            .landing-page-container{
                width: 100%;
                height: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .landing-page-row{
                height: 202px;
                width: 753px;
                text-align: center;
            }
            `} </style>
        </Fragment>
    )
}

export default Header