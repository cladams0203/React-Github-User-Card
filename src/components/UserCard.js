import React from 'react';

import { CardContainer, CardImage, UserHeading, CardInfo, InfoText, FollowerBtn} from '../styles';

function UserCard(props) {
    
    return(
        <CardContainer>
            <UserHeading>{props.userData.name}</UserHeading>
            <CardImage src={props.userData.avatar_url} alt='User' />
            <CardInfo>
                <InfoText>Handle: {props.userData.login}</InfoText>
                <InfoText>Company: {props.userData.company}</InfoText>
                <InfoText>Portfolio: {props.userData.blog}</InfoText>
                <InfoText>Followers: {props.userData.followers}</InfoText>
            </CardInfo>
            <FollowerBtn onClick={() => props.handleFollowerChange()} >View Followers</FollowerBtn>
        </CardContainer>
    )
}

export default UserCard;