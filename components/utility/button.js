import { Fragment } from "react"

const Button = ({ variant, onClick, children })=>{

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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                    width: 144px;
                    border-radius: 5px;
                    background: #3EB489;
                    border: 1px solid #3EB489;
                    margin: 0 auto;
                    cursor: pointer;
                }
                .more-reviews{
                    height: 40px;
                    width: 80px;
                    border: 1px solid #3EB489;
                    background: transparent;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .newsletter-btn{
                    height: 56px;
                    width: 104px;
                    color: #fff;
                    background: #056608;
                    border: 1px solid #056608;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .login{
                    background: transparent;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .signup{
                    height: 48px;
                    width: 104px;
                    border-radius: 8px;
                    border: 1px solid transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
            `} </style>
        </Fragment>
    )
}

export default Button