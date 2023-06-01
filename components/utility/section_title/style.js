import styled from "styled-components";

export const SectionWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto 40px;
    margin-top: ${props => props.top || '0'};
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
`
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 4px;
`
export const Text = styled.p`
    font-size: 18px;
`