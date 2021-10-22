import Header from "../../components/Header/Header"
import { useRequestData } from "../../components/hooks/useRequestData";
import { urlBase } from "../../constants/url.js"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Card, GridCard, ContainerButtons } from "./styled"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../global/contexts/GlobalContext";

const PokemonList = () => {
    const history = useHistory()
    const { pokedex, setPokedex, detailPokes, setDetailPokes, addToPokedex,
        getDetailPokes, pokes, isLoadingPokes, errorRequest, getData } = useContext(GlobalContext);

    const goToDetailPage = (id) => {
        history.push(`/pokemon/${id}`)
    }

    

    console.log(`detailPokes`, detailPokes)
    console.log(`pokedex`, pokedex)

    // if (detailPokes.length > 0) {
    //     const ui = () => {

    //         let i = 0

    //         while (i <= detailPokes.length -1) {
    //             let now = detailPokes[i].name
    //             let n = 0
    //             while (n <= pokedex.length) {
    //                 if (now === pokedex[n].name) {
    //                     detailPokes.splice(i, 1)
    //                 }
    //                 i++
    //             }
    //             i++
    //         }
    //     }
    //     ui()
    // }

    console.log(`detailPokes`, detailPokes)



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
                    <h2>{(item.name).capitalize()} </h2>
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
