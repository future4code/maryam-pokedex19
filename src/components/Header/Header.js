import { Head } from "./styled"
import { useHistory } from "react-router-dom";
import { goBack, goToPokedex } from "../../routes/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../global/contexts/GlobalContext";

const Header = (props) => {
    const history = useHistory();

    const { addToPokedex, removeFromPokedex, pokedex } = useContext(GlobalContext);


    if (props.detail) {
        // return (
        //     <Head>
        //         <button onClick={() => goBack(history)}>Voltar</button>
        //         <p>{props.pokeName}</p>
        //         <button style={{ width: "auto" }} onClick={() => goToPokedex(history)}>Adicionar/Remover Pokedex</button>
        //     </Head>
        // )
        if (pokedex.length === 0) {

            return (
                <Head>
                    <button onClick={() => goBack(history)}>Voltar</button>
                    <p>{props.pokeName}</p>
                    <button style={{ width: "auto" }}>Adicionar para a Pokedex</button>
                </Head>

            )
        } else {
            let i = 0

            while (pokedex.length - 1 >= i) {


                if (props.pokeName === pokedex[i].name) {
                    return (
                        <Head>
                            <button onClick={() => goBack(history)}>Voltar</button>
                            <p>{props.pokeName}</p>
                            <button style={{ width: "auto" }} >Remover da Pokedex</button>
                        </Head>
                    )
                } else {
                    return (
                        <Head>
                            <button onClick={() => goBack(history)}>Voltar</button>
                            <p>{props.pokeName}</p>
                            <button style={{ width: "auto" }}>Adicionar para a Pokedex</button>
                        </Head>
                    )
                }
                i++
            }
        }

    }

    if (props.pokedex) {
        return (
            <Head>

                <button onClick={() => goBack(history)}>Voltar</button>
                <p>Pokedex</p>
                <div></div>


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
