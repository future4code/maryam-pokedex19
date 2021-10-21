import Header from "../../components/Header/Header.js"
import { GlobalContext } from "../../global/contexts/GlobalContext";
import { Card, ContainerButtons } from "./styled"
import { useContext } from "react"
import { GridCard } from "../PokemonList/styled.js";

const Pokedex = () => {
    const { pokedex, setPokedex } = useContext(GlobalContext);

    pokedex.forEach((item) =>console.log(item))

    return (
        <div>

            <Header />

            <GridCard>
            {pokedex.length > 0 && pokedex.map((item) => <Card key={item.id}>
                <img src={item.sprites.versions['generation-v']['black-white'].animated.front_default} />
                <h2>{(item.name).capitalize()} </h2>
                <ContainerButtons>
                    <button >Remover da Pokedex</button>
                    <button >Ver detalhes</button>
                </ContainerButtons>
            </Card>
            )}
            </GridCard>
            
            


        </div>
    )
}

export default Pokedex
