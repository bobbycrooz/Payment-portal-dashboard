import React from 'react'
import styled from 'styled-components'
import image from '../../assets/images/sam.jpg'

const Container = styled.div`
    margin-top:2rem;
    
`

const ProfileImg = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.textColor};

`

const Profile = () => {
    return (
        <Container>
           <ProfileImg src={image}/>
           <ProfileName>Hot Bobby</ProfileName>
        </Container>
    )
}

export default Profile
