import { Fragment } from "react"

const LinkComponent = ({variant, url, open, children})=>{
        return (
            <Fragment>
                <a className={variant} onClick={open} href={url}> {children} </a>

                <style jsx> {`
                    a{
                        font-size: 14px;
                        font-weight: normal;
                        color: #fff;
                        text-decoration: none;
                    }
                    .signup{
                        height: 48px;
                        width: 104px;
                        left: 73px;
                        top: 0px;
                        border-radius: 8px;
                        background: white;
                        color: black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                    }
                    .booking-link{
                        color: black;
                        font-size: 14px;
                        font-weight: 500;
                    }
                `} </style>
            </Fragment>
        )
}

export default LinkComponent
