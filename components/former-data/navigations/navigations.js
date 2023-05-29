import Link from "./link"

const Navigations = ({ children, links })=>{
    return (
        <>
            <div className="navigation">
                <h1 className="navigation-heading">{children}</h1>
                <ul className="listItems">
                    {
                        links.map(({name, target})=>{
                            <Link url={target} >{name}</Link>
                        })
                    }
                </ul>
            </div>
        </>
    )   
}

export default Navigations