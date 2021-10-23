import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import { urlBase } from "../../constants/url.js"
import { useState, useEffect } from "react"
import axios from "axios"
import { AttacksPoke, ImgPoke, MainContainer, PokeAttacks, PokeImg, PokeTypes, PowersPoke } from "./styled"

const PokemonDetail = (id) => {
    const params = useParams()
    const [chosenPoke, setChosenPoke] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getPokeDetail()
    }, [])

    const getPokeDetail = (id) => {
        axios.get(`${urlBase}/${params.id}`)
            .then((response) => {
                setChosenPoke(response.data)
                setIsLoading(false)
            }).catch((error) => {
                alert(`Erro: `, error)
            })
    }

    console.log(`Utilizado Path Params: `, params)

    return (
        <div>
            <Header detalhes={true} pokeName={chosenPoke.name} id={params.id}/>

            {!isLoading ? (
                <MainContainer>
                
                <ImgPoke>
                    <PokeImg src= {chosenPoke.sprites.front_default} alt = "Imagem de Frente do Pokemon" />
                    <PokeImg src= {chosenPoke.sprites.back_default} alt = "Imagem de Costas do Pokemon" />
                </ImgPoke>

                <PowersPoke>
                    <h2>Poderes</h2>
                    {chosenPoke.stats.map((stat) => <p>{stat.stat.name}: {stat.base_stat}</p>)}
                    
                </PowersPoke>

                <AttacksPoke>
                    <PokeTypes>
                        {chosenPoke.types.map((type) => <p>{type.type.name}</p> )}  
                    </PokeTypes>

                    <PokeAttacks>
                        <h2>Principais Ataques</h2>
                        <p>{chosenPoke.moves[0] && chosenPoke.moves[0].move.name}</p>
                        <p>{chosenPoke.moves[1] && chosenPoke.moves[1].move.name}</p>
                        <p>{chosenPoke.moves[2] && chosenPoke.moves[2].move.name}</p>
                        <p>{chosenPoke.moves[3] && chosenPoke.moves[3].move.name}</p>
                        <p>{chosenPoke.moves[4] && chosenPoke.moves[4].move.name}</p>

                    </PokeAttacks>

                </AttacksPoke>
            
                </MainContainer>
            ) : (
                <h2>Carregando...</h2>
            )}

        </div>
    )
}

export default PokemonDetail
