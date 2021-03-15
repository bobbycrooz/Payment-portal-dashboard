import React from 'react'
import styled from 'styled-components'
import image from '../../assets/images/sam.jpg'


const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom:3rem ;
    padding: 1rem;
    align-items: center;

`


const ProfileImag = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius:50%;
    margin: 0 1rem;
    cursor: pointer;

    

`

const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray};
    font-size: 27px;
`

const Nav = () => {
    return (
        <Container>
            
            <MessageIcon className="iconify-inline" data-icon='mdi-light:email'></MessageIcon>

            <ProfileImag src={image}/>            
        </Container>
    )
}

export default Nav
