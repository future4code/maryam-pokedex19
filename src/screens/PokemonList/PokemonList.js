import Header from "../../components/Header/Header"
import { useRequestData } from "../../components/hooks/useRequestData";
import { urlBase } from "../../constants/url.js"
import { useState, useEffect } from "react"
import axios from "axios"
import { Card, GridCard, ContainerButtons } from "./styled"
import { useHistory } from "react-router-dom"

const PokemonList = () => {
    const [pokedex, setPokedex] = useState([])
    const [detailPokes, setDetailPokes] = useState()

    const [pokes, isLoadingPokes, errorRequest, getData] = useRequestData(
        `${urlBase}`)

    const history = useHistory()

    const addToPokedex = (id) => {

        const newPokeToPokedex = detailPokes.filter((item) => {
            return id === item.id
        })

        const newPokedex = [...pokedex, newPokeToPokedex]
        setPokedex(newPokedex)
        console.log(`POKE DA POKEDEX`, pokedex)

        const newDetailPokesList = detailPokes.filter((item) => {
            return id !== item.id
        })

        setDetailPokes(newDetailPokesList)
    }

    const goToDetailPage = (id) => {
        history.push(`/pokemon/${id}`)
    }

    const getDetailPokes = () => {
        const newList = [];

        for (let i = 1; i < 21; i++) {
            axios.get(`${urlBase}/${i}`)
                .then((res) => {
                    // newList[i - 1].push(res.data)
                    // setDetailPokes(newList)

                    newList[i - 1] = {
                        id: res.data.id,
                        name: res.data.name,
                        status: res.data.stats,
                        moves: res.data.moves,
                        types: res.data.types,
                        sprites: res.data.sprites,
                    };
                    if (newList.length === 20) {
                        setDetailPokes(newList);
                    }
                })
                .catch((err) => {
                    console.log("Erro Catch da requisição", err)
                });
        }


        // pokes.length > 10 && pokes.forEach((item) => {
        //     axios.get(`${urlBase}/${item.name}`)
        //         .then((res) => {
        //             newList.push(res.data)
        //             setDetailPokes(newList)
        //         })
        //         .catch((err) => {
        //             console.log("Erro Catch da requisição", err)
        //         });
        // })
    }

    useEffect(() => {
        getDetailPokes()
    }, [pokes])

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }

    return (
        <div>

            <Header />
            <GridCard>

                {isLoadingPokes && <h2>Carregando</h2>}
                {!isLoadingPokes && errorRequest && <p>{errorRequest.message} </p>}
                {!isLoadingPokes && pokes && pokes.length === 0 && (<p> Não foi encontrado nenhum resultado </p>)}

                {detailPokes && detailPokes.map((item) => <Card key={item.id}>
                    <img src={item.sprites.versions['generation-v']['black-white'].animated.front_default} />
                    <h2>{item.name} </h2>
                    <ContainerButtons>
                        <button onClick={() => addToPokedex(item.id)}>Adicionar à Pokedex</button>
                        <button onClick={() => goToDetailPage(item.id)}>Ver detalhes</button>
                    </ContainerButtons>
                </Card>
                )}
            </GridCard>
        </div>
    )
}

export default PokemonList
