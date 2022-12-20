import { Fragment } from "react"

const InputComponent = ({type, variant, text})=>{
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
            }
            `} </style>
        </Fragment>
    )
}

export default InputComponent