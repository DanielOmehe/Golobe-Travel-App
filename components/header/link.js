const Link = ({url, children, variant})=>{
    return(
        <>
            <li className={variant}>
                <a href={url} target="_blank" className="nav-link" >{children}</a>
            </li>
            <style jsx>{`
                .listItem{
                    list-style: none;
                }
                .listItem a{
                    text-decoration: none;
                    color: #fff;
                }
                .login{
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                .login a{
                    text-decoration: none;
                    color: #fff;
                    font-size: 14px;
                }
                .signup{ 
                    list-style: none;
                }
                .signup a{
                    border-radius: 8px;
                    text-decoration: none;
                    font-size: 14px;
                    color: #000;
                }
                .booking-link{
                    list-style: none;
                    margin-left: 5px;
                }
                .booking-link a{
                    text-decoration: none;
                    color: #000;
                    font-size: 14px;
                }
            `}</style>
        </>
    )
}

export default Link