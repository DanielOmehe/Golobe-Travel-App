import { Fragment } from "react";
import Footer  from '../components/landing-page/footer/footer'
import Header from "../components/utility/header/header";
import Main from "../components/landing-page/main/main";

const Index = ()=>{
    return (
        <Fragment>
            <Header 
            variant='landing-page-header'
            container='landing-page-container'
            row='landing-page-row'
            image='../public/images/backgroud.png' />
            <Main variant='landing-page-main' />
            <Footer variant='landing-page-footer' />
        </Fragment>
    )
}

export default Index