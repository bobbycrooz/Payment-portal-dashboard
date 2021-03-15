import React from 'react'
import styled from 'styled-components'
import Sortingbar from '../Sortingbar'


const Title = styled.h1`
    font-weight:700;
    color: ${({theme}) => theme.textColor};
    font-size:1.3rem;
    display:flex;
    align-items: center;
`

const DepositCount = styled.div`
    color: ${({ theme }) => theme.headerNumber};
    background-color: ${({ theme }) => theme.header};
    margin:1rem;
    font-size: 1rem;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

const Deposits = ({count, data, title}) => {
    return (
        <>
        <Title>
            {title}
            <DepositCount>
                {count}
            </DepositCount>
        </Title>
        <Sortingbar/>
        </>
    )
}

export default Deposits
