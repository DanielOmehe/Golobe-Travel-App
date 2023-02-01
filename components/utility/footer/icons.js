const Icons = ({variant, children})=>{
    return(
        <>
            <div className={variant}> {children} </div>
            <style jsx>{`
                .landing-page-icons{
                    height: 20px;
                    width: 116px;
                    left: 0px;
                    top: 63.147216796875px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 0px;
                }
            `}</style>
        </>
    )
}

export default Icons