import styled from "styled-components"
import { HeaderColor, BackGroundColor } from "../../constants/colors";

export const Head = styled.div`
max-width: 100vw;
height: 10vh;
background-color: ${HeaderColor};
display: flex;
align-items: center;
justify-content: space-between;
p {
    color: ${BackGroundColor};
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 35px;
}
button {
    margin: 0px 3vw ;
    width: 100px;
    height: 3em;
    border: 0px solid grey;
    border-radius: 10px;
    cursor: pointer;
}
`