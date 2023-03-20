import Frame from "./frame";
import Link from "./link";
import Links from './links';
import Button from "../utility/button";
import Route from '../utility/find';
import Logo from '../utility/logo';

const NavBar = ({variant})=>{
    return(
        <>
            <nav className={variant}> 
                <Frame variant='frame'>
                    <Links>
                        <Route>
                            <img src="/images/airplane.svg" alt="airplane" />
                            <Link variant='listItem' url='/flights'>Find flights</Link>           
                        </Route>
                        <Route>
                            <img src="/images/bed.svg" alt="bed" />
                            <Link variant='listItem' url='/hotels'>Find Stays</Link>           
                        </Route>
                    </Links>
                    <Logo logo='/images/navbarLogo.png' alt='navbarlogo'/>             
                </Frame>
                <Frame variant='register-frame'>
                    <Button variant='login'>
                        <Link variant='login' url='/login'>Login</Link>
                    </Button>
                    <Button variant='signup'>
                        <Link variant='signup' url='/signup'>sign up</Link>
                    </Button>
                </Frame>
            </nav>
            <style jsx>{`
                .landing-page-navbar{
                    height: 96px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 24px 32px 24px 32px;
                    justify: space-between;                  
                }
            `}</style>
        </>
    )
}

export default NavBar