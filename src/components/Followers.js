import React from 'react'

import { FollowersContainer, FollowerCard, CardImage, FollowerHeading, FollowerInfo } from '../styles';

function Followers(props) {
    console.log(props)
    return(
        <FollowersContainer>
            {props.followers.map((item,index) => {
                return(
                    <FollowerCard key={index} >
                        <FollowerHeading>{item.login}</FollowerHeading>
                        <CardImage src={item.avatar_url} alt='followers' />
                        <FollowerInfo>
                            <span>GitHub Url: {item.url}</span>
                            <span>Portfolio: {item.html_url}</span>
                            <span>Repo's: {item.repos_url}</span>
                        </FollowerInfo>
                    </FollowerCard>
                )
            })}
        </FollowersContainer>
    )
}
export default Followers;