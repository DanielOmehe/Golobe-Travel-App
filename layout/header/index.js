import NavBar from "./nav"
import { HeaderWrapper } from "./style"
import  Banner  from "./banner"


const Header = ({variant, children})=>{
    return(
        <>
            <HeaderWrapper>
                <NavBar />
                <Banner/>
            </HeaderWrapper>
        </>
    )
}

export default Header