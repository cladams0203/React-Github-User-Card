import React from 'react';

import { CardContainer, CardImage, UserHeading, CardInfo } from '../styles';

function UserCard(props) {
    console.log(props)
    return(
        <CardContainer>
            <UserHeading>{props.userData.name}</UserHeading>
            <CardImage src={props.userData.avatar_url} alt='User' />
            <CardInfo>
                <p>Handle: {props.userData.login}</p>
                <p>Company: {props.userData.company}</p>
            </CardInfo>
        </CardContainer>
    )
}

export default UserCard;