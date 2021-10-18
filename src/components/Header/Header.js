import { Head } from "./styled"
import { useHistory } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator"


const Header = () => {
    const history = useHistory();


    return (
        <Head>

            <button onClick={() => goBack(history)}>Voltar</button>
            <p>infoPokes.com</p>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>

        </Head>
    )
}

export default Header
