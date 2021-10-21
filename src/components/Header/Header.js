import { Head } from "./styled"
import { useHistory } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator"



const Header = (props) => {
    const history = useHistory();

    if (props.detalhes) {
        return (
            <Head>

                <button onClick={() => goBack(history)}>Voltar</button>
                <p>{props.pokeName}</p>
                <button style={{ width: "auto" }} onClick={() => goToPokedex(history)}>Adicionar/Remover Pokedex</button>

            </Head>
        )
    }

    return (
        <Head>

            <button onClick={() => goBack(history)}>Voltar</button>
            <p>infoPokes.com</p>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>

        </Head>
    )
}

export default Header
