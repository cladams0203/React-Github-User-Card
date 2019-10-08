import React from 'react';

function UserCard(props) {
    console.log(props)
    return(
        <div>
            <h2>{props.userData.name}</h2>
            <img src={props.userData.avatar_url} alt='User' />
            <p>Handle: {props.userData.login}</p>
            <p>Company: {props.userData.company}</p>
        </div>
    )
}

export default UserCard;