import { NavLinkWrapper, NavIcon } from "./style";
import Link from 'next/link';

const NavLink =({to, url, children})=>{
    return(
        <NavLinkWrapper>
            <NavIcon src={url} />
            <Link href={to}>{children}</Link>
        </NavLinkWrapper>
    )
}

export default NavLink