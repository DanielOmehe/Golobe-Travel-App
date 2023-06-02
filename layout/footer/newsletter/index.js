import { NewsWrapper, InputWrapper, Form, NewsTitle, NewsSubTitle, Text, Input, Button, Mailbox } from './style'
const Newsletter = () => {
    return (
        <NewsWrapper>
            <InputWrapper> 
                <NewsTitle>Subscribe <br/> NewsLetter</NewsTitle>
                    <NewsSubTitle>The Travel</NewsSubTitle>
                    <Text>Get inspired! Receive travel discounts, tips and behind the scenes stories.</Text>
                    <Form>
                        <Input type='email' placeholder='Your email address'/>
                        <Button>Subscribe</Button>
                    </Form>
            </InputWrapper>
            <Mailbox>
                <img src='/images/svgs/mailbox.svg' alt='mailbox' />
            </Mailbox>
        </NewsWrapper>
    )
}

export default Newsletter;