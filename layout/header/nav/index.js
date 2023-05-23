import NavLink from "../link"
import { NavIcon } from "../link/style"
import { NavButton, NavLeft, NavRight, NavWrapper } from "./style"
import Link from 'next/link'

const NavBar =()=>{
    return(
        <NavWrapper>
            <NavRight>
                <NavLink to='./flight' url='images/airplane.svg'>Find Flights</NavLink>
                <NavLink to='./hotel' url='images/bed.svg'>Find Hotels</NavLink>
            </NavRight>
            <NavIcon src="images/navbarLogo.png" iconSize='auto' />
            <NavLeft>
                <NavButton>
                    <Link href='login'>login</Link>
                </NavButton>
                <NavButton background='#fff' color="#000">
                    <Link href='login'>Sign up</Link>
                </NavButton>
            </NavLeft>
        </NavWrapper>
    )
}

export default NavBar