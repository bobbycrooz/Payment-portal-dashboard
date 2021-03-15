import React from 'react'
import styled from 'styled-components'

const AddBtn = styled.div`
    background-color: ${({ theme }) => theme.colorGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:25px;
    position: absolute;
    top: 6rem;
    right: 7rem;
    cursor: pointer;

`
const AddIcon = styled.span`
    color: #fff;
    font-size:37px;

`

const AddMoneyBtn = () => {
    return (
        <AddBtn>
            <AddIcon className="iconify-inline" data-icon='mdi-light:plus'></AddIcon>
            
        </AddBtn>
    )
}

export default AddMoneyBtn
