const NewsLetterComponent = ({children})=>{
    return(
        <>
            <div className="newsletter">{children}</div>
            <style jsx>{`
                .newsletter{

                }
            `}</style>
        </>
    )
}

export default NewsLetterComponent