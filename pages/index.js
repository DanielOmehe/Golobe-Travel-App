import { Fragment } from "react";
import { Main } from "../components/landing-page/main";
import { Footer, Header } from "../components/utility";

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