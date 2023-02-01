const Logo = ({})=>{
    return (
        <>
            <div className="icons-container">
                <img src="/images/Logo.png" className="logo" alt='Logo'/>
                <Icons variant='landing-page-icons'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <YouTube />
                </Icons>
            </div>
            <style jsx>{`
                
            `}</style>
        </>
    )
}

export default Logo