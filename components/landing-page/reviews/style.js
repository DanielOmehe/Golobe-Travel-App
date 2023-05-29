import styled from "styled-components";

export const ReviewWrapper = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    gap: 40px;
    overflow-x: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
`
export const Review = styled.div`
    width: 425px;
    height: 560px;
    background: #FFFFFF;
    color: #112211;
    box-shadow: 2px 4px 16px rgba(17, 34, 17, 0.1);
    border-radius: 20px;
    padding:24px;
    position: relative;
    transform-style: preserve-3d;
    font-size: 14px;

    &:before{
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        background: rgba(141, 211, 187, 0.4);
        border-radius: 20px;
        position: absolute;
        transform:translate(22px, 22px) translateZ(-1px);
    }
`
export const ReviewTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 32px;
`
export const ReviewSub = styled.div`
    font-weight: 500;
    opacity: 0.5;
`
export const TextShorten = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
export const ReviewButton = styled.button`
    font-weight:700;
    margin: 16px 0;
    border: none;
    background-color:transparent;
    display:block;
    margin-left:auto;
    cursor:pointer;
`
export const ReviewStars = styled.div`
    display: flex;
    gap: 10px;
`
export const ReviewName = styled.p`
    margin-top: 10px;
    font-weight: 700;
`
export const ReviewStudio = styled.p`
    opacity: 0.5;
`
export const ReviewGoogle = styled.p`
    display:flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0 30px;
`