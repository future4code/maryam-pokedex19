import styled from "styled-components"
import { CardColor } from "../../constants/colors"

export const MainContainer = styled.main`
    height: 80vh;
    margin: 20px 10vw;
    display: flex; 
    justify-content: space-evenly;
`

export const ImgPoke = styled.div`
    align-self: center;
    height: 75%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

export const PowersPoke = styled.div`
    background: ${CardColor};
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`
export const AttacksPoke = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
export const PokeImg = styled.img`
    height: 25vh;
    background: ${CardColor};
`
export const PokeTypes = styled.div`
    background: ${CardColor};
    height: 10%;
    display: flex;
    justify-content: space-around;
`
export const PokeAttacks = styled.div`
    background: ${CardColor};
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

