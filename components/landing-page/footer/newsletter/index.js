import Form from "./form"
import NewsLetterComponent from "./newsletter"
import { MailBox } from "../../../icons"

const NewsLetter = ()=>{
    return(
        <NewsLetterComponent>
            <Form />
            <MailBox />
        </NewsLetterComponent>
    )
} 

export default NewsLetter