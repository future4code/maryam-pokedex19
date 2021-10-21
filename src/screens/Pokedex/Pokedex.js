import Header from "../../components/Header/Header.js"
import { GlobalContext } from "../../global/contexts/GlobalContext";
import { Card, ContainerButtons } from "./styled"
import { useContext } from "react"

const Pokedex = () => {
    const { pokedex, setPokedex } = useContext(GlobalContext);

    console.log(pokedex)
    return (
        <div>

            <Header />
            {/* {pokedex.length > 0 && pokedex.map((item) => <Card key={item.id}>
                <img src={item.sprites.versions['generation-v']['black-white'].animated.front_default} />
                <h2>{(item.name).capitalize()} </h2>
                <ContainerButtons>
                    <button >Adicionar à Pokedex</button>
                    <button >Ver detalhes</button>
                </ContainerButtons>
            </Card>
            )} */}

        </div>
    )
}

export default Pokedex
