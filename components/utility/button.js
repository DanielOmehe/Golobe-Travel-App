import { Fragment } from "react"

const ButtonComponent = ({ variant, onClick, children })=>{

    return(
        <Fragment>
            <button className={variant} onClick={onClick} > {children} </button>

            <style jsx> {`
            .places-button{
                height: 40px;
                width: 149px;
                border: 1px solid #3EB489;
                border-radius: 5px;
                cursor: pointer;
            }
            .book{
                height: 48px;
                width: 144px;
                border-radius: 5px;
                background: #3EB489;
                border: 1px solid #3EB489;
            }
            .more-reviews{
                height: 40px;
                width: 80px;
                border: 1px solid #3EB489;
                background: transparent;
                border-radius: 5px;
            }
            .newsletter-btn{
                height: 56px;
                width: 104px;
                color: #fff;
                background: #056608;
                border: 1px solid #056608;
                border-radius: 5px;
            }
            `} </style>
        </Fragment>
    )
}

export default ButtonComponent