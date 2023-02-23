const NewsLetterComponent = ({children})=>{
    return(
        <>
            <div className="newsletter">{children}</div>
            <style jsx>{`
                .newsletter{
                    height: 305px;
                    width: 1232px;
                    left: 88px;
                    top: -151px;
                    border-radius: 20px;
                    padding: 0px 24px 0px 24px;
                    justify-content: space-between;
                    display: flex;
                    align-items: center;
                    background: #CDEAE1;
                    box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
                    position: absolute;
                }
            `}</style>
        </>
    )
}

export default NewsLetterComponent