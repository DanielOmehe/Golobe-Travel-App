const Header = ({variant, children})=>{
    return(
        <>
            <header className={variant} >{children}</header>
            <style jsx>{`
                .landing-page-header{
                    width: 100%;
                    height: 100vh;
                    background: linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('/images/background.png');
                    background-position: center;
                    background-size: cover;
                    position: relative;
                }
            `}</style>
        </>
    )
}

export default Header