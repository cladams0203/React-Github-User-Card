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
    color: white;
    text-shadow: 2px 2px black;
`
export const CardInfo = styled.div `
    display: flex;
    width: 60%;
    flex-direction: column;
    background-color:#dedcdb;
    padding: 20px 0 20px 30px;
    box-shadow: 2px 3px black;
`
export const InfoText = styled.span `
    padding: 5px 0px;
    font-size: 1rem;
    font-weight: bold;
`
export const FollowerBtn = styled.button `
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.5rem;
    box-shadow: 1px 1px 5px black;
`
export const FollowersContainer = styled.div `
    Display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin-top: 30px;
`
export const FollowerCard = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    box-shadow: 2px 2px black;
    margin-top: 20px;
    padding: 0 10px 20px 10px;
`
export const FollowerHeading = styled.h3 `
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
`
export const FollowerInfo = styled.div `
    display: flex;
    width: 95%;
    flex-direction: column;
    background-color:#dedcdb;
    margin-top: 20px;
    padding: 10px 10px;
    box-shadow: 1px 1px 3px black;
`