import { Fragment } from "react"

const Input = ({type, variant, text})=>{
    return(
        <Fragment>
            <input type={type} className={variant} placeholder={text} />
            <style jsx> {`
            .newsletter-email{
                height: 56px;
                width: 473px;
                border: none;
                outline: none;
                background: #fff;
                padding-left: 20px;
                font-size: 18px;
            }
            `} </style>
        </Fragment>
    )
}

export default Input