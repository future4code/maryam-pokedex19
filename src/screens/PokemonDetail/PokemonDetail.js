import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import { urlBase } from "../../constants/url.js"
import { useState, useEffect } from "react"
import axios from "axios"

const PokemonDetail = (id) => {
    const params = useParams()
    const [chosenPoke, setChosenPoke] = useState([])

    useEffect(() => {
        getPokeDetail()
    }, [])

    const getPokeDetail = (id) => {
        axios.get(`${urlBase}/${params.id}`)
            .then((response) => {
                setChosenPoke(response.data)
                console.log(response.data)
            }).catch((error) => {
                alert(`Erro: `, error)
            })
    }

    console.log(`Utilizado Path Params: `, params)

    return (
        <div>
            <Header />

            {chosenPoke ? (
                <div>
                    <h1>{chosenPoke.name}</h1>

                </div>

            ) : (
                <h2>Carregando...</h2>
            )}

        </div>
    )
}

export default PokemonDetail
