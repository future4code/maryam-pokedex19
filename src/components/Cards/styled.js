import styled from "styled-components"
import { CardColor } from "../../constants/colors"

export const Card = styled.div`
height: 30vw;
width: 22vw;
border: 1px solid gray;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: ${CardColor};
img {
    height: 45%;
    margin-top: 35px;
}
`

export const GridCard = styled.div`
width: 95%;
margin: 0 auto;
margin-top: 15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
row-gap: 15px;
column-gap: 15px;
`

export const ContainerButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90%;
margin-bottom: 10px;

button {
    width: 50%;
    height: 3em;
    border: 1px solid gray;
    border-radius: 10px;
    cursor: pointer;
}

`