import { useState, useEffect } from "react"
import axios from "axios"
import { urlBase } from "../../constants/url.js"

export const useRequestData = (url) => {
    const [pokes, setPokes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    // response.data.sprites.versions['generation-v']['black-white'].animated.front_default

    const getData = () => {
        setIsLoading(true)
        axios.get(urlBase)
            .then((res) => {
                setPokes(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("Erro Catch da requisição", err)
                setError(err)
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return [pokes, isLoading, error, getData]
}
