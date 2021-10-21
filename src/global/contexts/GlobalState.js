import axios from "axios"
import React, { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { useRequestData } from "../../components/hooks/useRequestData";
import { urlBase } from "../../constants/url.js"

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [detailPokes, setDetailPokes] = useState()

    const [pokes, isLoadingPokes, errorRequest, getData] = useRequestData(
        `${urlBase}`)


    const getDetailPokes = () => {
        const newList = [];

        for (let i = 1; i < 21; i++) {
            axios.get(`${urlBase}/${i}`)
                .then((res) => {
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
                    console.log(`OK`)
                })

                .catch((err) => {
                    console.log("Erro Catch da requisição", err)
                });
        }
    }

    const removeFromPokedex = (id) => {
        const removePoke = pokedex.filter(item => item.id !== id) 
    }

    const addToPokedex = (id) => {
        const newPokeToPokedex = detailPokes.filter((item) => {
            return id === item.id
        })

        const newPokedex = [...pokedex, newPokeToPokedex[0]] 
        setPokedex(newPokedex)
        console.log(`POKE DA POKEDEX`, newPokedex)

        const newDetailPokesList = detailPokes.filter((item) => {
            return id !== item.id
        })
        setDetailPokes(newDetailPokesList)
    }

    return (
        <GlobalContext.Provider value={{ pokedex, setPokedex, detailPokes, setDetailPokes, addToPokedex, getDetailPokes, pokes, isLoadingPokes, errorRequest, getData }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState