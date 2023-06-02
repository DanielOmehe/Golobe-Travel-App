import { HeaderWrapper } from "./style"

const Header = ({height, children})=>{
    return(
        <>
            <HeaderWrapper height={height}>
                {children}
            </HeaderWrapper>
        </>
    )
}

export default Header