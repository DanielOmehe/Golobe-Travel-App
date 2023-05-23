import { HeaderWrapper } from "./style"
import  Banner  from "./banner"


const Header = ({variant, children})=>{
    return(
        <>
            <HeaderWrapper>
                <Banner/>
            </HeaderWrapper>
        </>
    )
}

export default Header