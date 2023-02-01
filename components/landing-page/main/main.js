const Main = ({variant, children})=>{
    return(
        <>
            <main className={variant} >
                {children}
            </main>
            <style jsx> {`
            .landing-page-main{
                background: #ededed;
                position: relative;
                padding-top: 263px;
                padding-bottom: 200px;
            }
            `} </style>
        </>
    )
}

export default Main