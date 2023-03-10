import Input from "./input"
import Button from "../../utility/button"
import Text from "../../utility/text"

const Form = ()=>{
    return(
        <>
            <div className="newsletter">
                <Text variant='newsletter-heading'>Subscribe NewsLetter</Text>
                <div className="newsletter-title">
                    <Text variant='newsletter-sub-heading'>The Travel</Text>
                    <Text variant='newsletter-text' >Get inspired! Receive travel discounts, tips and behind the scenes stories.</Text>
                    <form className="newsletter-form">
                        <Input type='email' variant='newsletter-email' text='Your email address'/>
                        <Button variant='newsletter-btn' >Subscribe</Button>
                    </form>
                </div>
            </div>
            <style jsx> {`
            .newsletter{
                height: 305px;
                width: 593px;
                left: 24px;
                top: 0px;
                border-radius: 0px;
                padding: 24px 0px 24px 0px;
                justify: space-between;               
            }
            .newsletter-title{
                height: 125px;
                width: 593px;
            }
            .newsletter-form{
                height: 56px;
                width: 593px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            `} </style>
        </>
    )
}

export default Form