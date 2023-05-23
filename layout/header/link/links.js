const Links = ({children})=>{
    return(
        <>
            <div className="links">{children}</div>
            <style jsx>{`
                .links{
                    height: 24px;
                    width: 260px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}</style>
        </>
    )
}

export default Links