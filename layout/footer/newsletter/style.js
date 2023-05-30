import styled from 'styled-components'

export const NewsWrapper = styled.div`
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    background-color:#CDEAE1;
    width: 85%;
    margin: auto;
    display:flex;
    justify-content: space-between;
    box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
    border-radius: 20px;
    color: #112211;
`

export const InputWrapper = styled.div`
    padding: 24px;
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    opacity: 0.7;
    margin: 8px 0 16px;
`

export const NewsTitle = styled.p`
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 24px;
`

export const NewsSubTitle = styled.p`
    font-weight: 700;
    font-size: 20px;
    opacity: 0.8;
`

export const Form = styled.form`
     display: flex;
     gap: 20px;
`

export const Input = styled.input`
    width: 90%;
    border-radius: 4px;
    border: none;
    outline: none;
    background: #fff;
    padding: 18px 20px;
    font-size: 16px;
`
export const Button = styled.button`
    font-weight: 600;
    font-size: 14px;
    background-color: #112211;
    color: #fff;
    width: 104px;
    padding: 18px 20px;
    outline: none;
    border: none;
    border-radius: 4px;
`

export const Mailbox = styled.div`
    box-sizing: border-box;
    width: 400px;
    position: relative;

    & img{
        position: absolute;
        bottom: 0;
        width: 95%;
    }
`