import {styled} from 'styled-components';


export const koinNav = styled.nav`

background-color: aquamarine;
display: flex;
`


export const WrapSection = styled.div`
margin: 0 5% 0 5%;
font-family: "policePourTout";
text-align: center;
min-height: 591px;
`


export const ErrorField = styled.p`
background-color: #eee;
margin: 0 auto !important;
padding: 10px 2px 10px 2px;
color: red;
`

export const KoinButton = styled.button`
transition: 0.3s;
font-family: "policePourTout";
border: none;
background-color: rgb(18, 55, 42);
color: white;
padding: 10px 2px 10px 2px;
font-weight: bold;
cursor: pointer;
font-size: 16px;
    &:hover {
        background-color: #DEFCF9;
        color: rgb(18, 55, 42)
    }
`


export const KoinAccroche = styled.div`
color: rgb(18, 55, 42);
padding: 20px;
height: 150px;
line-height: 130px;
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0.8772759103641457) 0%, rgba(222,252,249,1) 48%, rgba(255,255,255,1) 100%);
`