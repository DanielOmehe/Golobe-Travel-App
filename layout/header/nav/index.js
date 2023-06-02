import NavLink from "../link";
import { NavIcon } from "../link/style";
import { NavButton, NavLeft, NavRight, NavWrapper } from "./style";
import Link from "next/link";

const NavBar = ({ text, background, logo, icons, shadow }) => {
  return (
    <NavWrapper color={background} shadow={shadow}>
      <NavRight>
        {icons.map((icon, index) => (
          <NavLink text={text} key={icon.key} to={icon.target} url={icon.url}>
            {icon.text}
          </NavLink>
        ))}
      </NavRight>
      <Link href="/">
        <NavIcon src={logo} iconSize="auto" />
      </Link>
      <NavLeft>
        <NavButton text={text ? "#000" : "#fff"}>
          <Link href="./login">login</Link>
        </NavButton>
        <NavButton
          background={text ? "#000" : "#fff"}
          text={text ? "#fff" : "#000"}
        >
          <Link href="./sign-up">Sign up</Link>
        </NavButton>
      </NavLeft>
    </NavWrapper>
  );
};

export default NavBar;
