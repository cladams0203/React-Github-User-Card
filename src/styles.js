import styled from 'styled-components';

export const Container = styled.div `
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
`
export const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    border: 1px solid black;
    max-width: 700px;
    padding: 0 20px 30px 20px;
    background: tan;
    border-radius: 1rem;
    box-shadow: 2px 2px 2px black;
`
export const CardImage = styled.img `
    width: 30%;
    border: 1px solid black;
`
export const UserHeading = styled.h2 `
    width: 100%;
    text-align: center;
    font-size: 3rem;
`
export const CardInfo = styled.div `
    display: flex;
    width: 40%;
    flex-direction: column;
`