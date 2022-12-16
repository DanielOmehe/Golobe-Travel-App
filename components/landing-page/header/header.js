import { Fragment } from "react";
import { NavBar } from "../../utility";

const HeaderComponent = ()=>{
    return(
        <Fragment>
            <header className="header">
                <NavBar />
            </header>
            <style jsx> {`
            .header{
                width: 100%;
                height: 100vh;
                border: 1px solid black;
                background: url('/images/background.png');
            }
            `} </style>
        </Fragment>
    )
}

export default HeaderComponent