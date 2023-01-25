import styled from "styled-components"

export const HeaderBox = styled.div`
    display: grid;
    grid-template-row: 1fr;
    grid-template-column: 1fr 1fr 1fr;
    height: 8vh;
`

export const TitleHeader = styled.p`
    font-size: 32px;
    grid-column: 2/3;
    grid-row: 1;
`

export const ProfilePicture = styled.img`
    width:50px ;
    height:50px ;
    border-radius: 100% ;
`
export const Name = styled.p`
    font-size: medium;
`

export const UserInfo = styled.div`
    grid-column-start: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content:flex-start;

`
