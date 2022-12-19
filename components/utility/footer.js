const { Fragment } = require("react")

const FooterComponent = ()=>{
    return(
        <Fragment>
            <footer className="footer">
                
            </footer>
            <style jsx> {`
            .footer{
                height: 573px;
                width: 100%;
                border: 1px solid black;
            }
            `} </style>
        </Fragment>
    )
}

export default FooterComponent