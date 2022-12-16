import { Fragment } from "react"
import { Airplane, Bed } from "../icons"
import { Find } from "."
const NavBarComponent = ()=>{
    return(
        <Fragment>
            <nav className="navbar">
                <Find>
                    <Airplane />
                    <a href="/" >Find Flights</a>
                </Find>            
                <Find>
                    <Bed />
                    <a href="/" >Find Hotels</a>
                </Find>            
            </nav>
        </Fragment>
    )
}

export default NavBarComponent