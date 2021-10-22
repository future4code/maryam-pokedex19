import axios from "axios"
import React, { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { useRequestData } from "../../components/hooks/useRequestData";
import { urlBase } from "../../constants/url.js"
import { useEffect } from "react"

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [detailPokes, setDetailPokes] = useState()


    const [pokes, isLoadingPokes, errorRequest, getData] = useRequestData(
        `${urlBase}?limit=151`)


    const getDetailPokes = () => {
        const newList = [];
        pokes.forEach((item) => {
            axios.get(`${urlBase}/${item.name}`)
                .then((res) => {
                    newList.push(res.data)
                    if (newList.length === 20) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id
                        })
                        setDetailPokes(orderedList)
                    }
                })
        });
    }

    const removeFromPokedex = (id) => {
        const addPoke = pokedex.filter(item => item.id === id)
        const removePoke = pokedex.filter(item => item.id !== id)
        setPokedex(removePoke)

        const newHome = [...detailPokes, addPoke[0]]

        const orderedList = newHome.sort((a, b) => {
            return a.id - b.id
        })
        setDetailPokes(orderedList)
    }

    const addToPokedex = (id) => {
        const newPokeToPokedex = detailPokes.filter((item) => {
            return id === item.id
        })

        const newPokedex = [...pokedex, newPokeToPokedex[0]]
        setPokedex(newPokedex)

        const newDetailPokesList = detailPokes.filter((item) => {
            return id !== item.id
        })
        setDetailPokes(newDetailPokesList)
    }

    useEffect(() => {
        getDetailPokes()
    }, [pokes])

    return (
        <GlobalContext.Provider value={{ pokedex, setPokedex, detailPokes, setDetailPokes, addToPokedex, getDetailPokes, pokes, isLoadingPokes, errorRequest, getData, removeFromPokedex }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState