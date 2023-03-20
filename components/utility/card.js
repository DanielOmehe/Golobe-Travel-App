const Card =({ className, children })=>{
    return(
        <>
            <div className={className}>{children}</div>
            <style jsx>{`
                .review{
                    height: 584px;
                    width: 425px;
                    border-radius: 20px;
                    padding: 24px;
                    background: #fff;
                    z-index: 1;
                    box-shadow: 26px 26px 2px rgba(141, 211, 187, 0.4);
                    margin-right: 40px;
                }
            `}</style>
        </>
    )
}

export default Card