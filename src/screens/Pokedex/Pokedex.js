import Header from "../../components/Header/Header.js"
import { GlobalContext } from "../../global/contexts/GlobalContext";
import { Card, ContainerButtons } from "./styled"
import { useContext } from "react"
import { GridCard } from "../PokemonList/styled.js";
import { useHistory } from "react-router-dom"

const Pokedex = () => {
    const { pokedex, setPokedex, removeFromPokedex } = useContext(GlobalContext);

    const history = useHistory()

    const goToDetailPage = (id) => {
        history.push(`/pokemon/${id}`)
    }

    pokedex.forEach((item) =>console.log(item))

    return (
        <div>

            <Header pokedex={true} />

            <GridCard>
            {pokedex.length > 0 && pokedex.map((item) => <Card key={item.id}>
                <img src={item.sprites.versions['generation-v']['black-white'].animated.front_default} />
                <h2>{(item.name).capitalize()} </h2>
                <ContainerButtons>
                    <button onClick={() => removeFromPokedex(item.id)}>Remover da Pokedex</button>
                    <button onClick={() => goToDetailPage(item.id)} >Ver detalhes</button>
                </ContainerButtons>
            </Card>
            )}
            </GridCard>
            
        </div>
    )
}

export default Pokedex
