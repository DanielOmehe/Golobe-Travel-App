import { NavLinkWrapper, NavIcon } from "./style";
import Link from "next/link";

const NavLink = ({ to, text, url, children})=>{
  return (
    <NavLinkWrapper color={text ? '#000' : '#fff'}>
      <NavIcon src={url} />
      <Link href={to}>{children}</Link>
    </NavLinkWrapper>
  );
};

export default NavLink;
