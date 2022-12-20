import NewsLetter from "../landing-page/footer/newsletter"
import { Fragment } from 'react';

const Footer = ()=>{
    return(
        <Fragment>
            <footer className="footer">
                <div className="newsLetter">
                    <NewsLetter />
                    <div className="mailbox">
                        <img src="/images/mailbox.svg" alt='mailbox' />
                    </div>
                </div>
            </footer>
            <style jsx> {`
            .footer{
                height: 373px;
                background: #8DD3BB;
                width: 100%;
                position: relative;
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
                border: 1px solid black;
            }
            `} </style>
        </Fragment>
    )
}

export default Footer