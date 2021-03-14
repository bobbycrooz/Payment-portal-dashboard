import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Menu from './Menu/Menu'
import Toggler from './Toggler'



const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width:16rem;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const SideBar = () => {
    return (
        <Container>
            <Profile/>
            <Menu/>
            <Toggler/>
        </Container>
    )
}

export default SideBar
