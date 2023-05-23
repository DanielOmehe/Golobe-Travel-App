import Form from "./form"
import NewsLetterComponent from "./newsletter"
import Mailbox from './mailbox';

const NewsLetter = ()=>{
    return(
        <NewsLetterComponent>
            <Form />
            <Mailbox />
        </NewsLetterComponent>
    )
} 

export default NewsLetter