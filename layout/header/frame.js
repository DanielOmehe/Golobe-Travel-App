const Frame = ({variant, children})=>{
    return(
        <>
            <div className={variant}> {children} </div>
            <style jsx>{`
                .frame{
                    height: 36px;
                    width: 714.3529663085938px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-left: 62px;
                }
                .register-frame{
                    height: 48px;
                    width: 177px;
                    margin-left: 424px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}</style>
        </>
    )
}

export default Frame