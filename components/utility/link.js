import { Fragment } from "react"

const LinkComponent = ({variant, url, children})=>{
        return (
            <Fragment>
                <a className={variant} href={url}> {children} </a>

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
                `} </style>
            </Fragment>
        )
}

export default LinkComponent
