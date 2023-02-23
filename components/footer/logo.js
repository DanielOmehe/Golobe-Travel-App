import Icons from './icons'
import { icons } from '../data/icons'

const Logo = ()=>{
    return (
        <>
            <div className="icons-container">
                <img src="/images/Logo.png" className="logo" alt='Logo'/>
                <Icons variant='landing-page-icons'>
                    {
                        icons.map(({icon, text})=>{
                            return <img src={icon} alt={text} key={text} />
                        })
                    }
                </Icons>
            </div>
            <style jsx>{`
                
            `}</style>
        </>
    )
}

export default Logo