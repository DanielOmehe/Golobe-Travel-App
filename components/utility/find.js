const Find = ({children})=>{
    return(
        <>
            <div className="find" > {children} </div>
            <style jsx> {`
                .find{
                    height: 24px;
                    width: 115px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                }
            `} </style>
        </>
    )
}

export default Find