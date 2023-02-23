const Footer = ({children})=>{
    return(
        <>
            <footer className="footer"> {children} </footer>
            <style jsx> {`
                .footer{
                    height: 373px;
                    background: #8DD3BB;
                    width: 100%;
                    position: relative;
                    padding-top: 200px;
                }
                .newsLetter{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    height: 305px;
                    width: 1232px;
                    top: -40%;
                    left: 10%;
                    padding: 0px 24px;
                    justify: space-between;
                    position: absolute;
                    background: #CDEAE1;
                    box-shadow: 0 0 5px rgba(0,0,0,.45);
                    border-radius: 10px;
                }
                .mailbox{
                    height: 305px;
                    width: 400px;
                }
                .footer-row{
                    height: 140px;
                    width: 1232px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .footer-navigations{
                    height: 140px;
                    width: 972px;
                    left: 260px;
                    top: 0px;
                    border-radius: 0px;
                    border: 1px solid white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .navigation{
                    height: 140px;
                    width: 175.1999969482422px;
                    left: 0px;
                    top: 0px;
                    border-radius: 0px;
                    border: 1px solid white;
                }
            `} </style>
        </>
    )
}

export default Footer