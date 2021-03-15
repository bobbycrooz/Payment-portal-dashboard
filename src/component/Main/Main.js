import React from 'react'
import styled from 'styled-components'
import Nav from './nav'
import AddMoneyBtn from './AddMoneyBtn'
import DeposiData from '../../DepositData.json'
import Deposits from './Deposits/Deposits'



const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`
const Main = () => {
    return (
        <Container>
            <Nav/>
            <AddMoneyBtn/>
            <Deposits title="Active deposits" count={2} data={DeposiData.active}/>
            <Deposits title="Close deposits" count={2} data={DeposiData.close}/>
        </Container>
    )
}

export default Main
