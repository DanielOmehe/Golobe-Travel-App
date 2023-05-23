import NavBar from "./nav"
import { HeaderWrapper } from "./style"

const Header = ({variant, children})=>{
    return(
        <>
            <HeaderWrapper>
             <NavBar />
            </HeaderWrapper>
        </>
    )
}

export default Header