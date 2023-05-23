const Link = ({children, url})=>{
    return (
        <>
            <a className="navLink" href={url} target='_blank'>{children}</a>
            <style jsx>{``}</style>
        </>
    )
}

export default Link