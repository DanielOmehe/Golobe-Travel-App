const Frame = ({children})=>{
    return(
        <>
            <div className='frame'>{children}</div>
            <style jsx>{`
                .frame{
                    display: flex;
                }
            `}</style>
        </>
    )
}

export default Frame