import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Pokedex from "../screens/Pokedex/Pokedex.js"
import PokemonDetail from "../screens/PokemonDetail/PokemonDetail.js"
import PokemonList from "../screens/PokemonList/PokemonList"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <PokemonList />
                </Route>

                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>

                <Route exact path="/pokemon/:name">
                    <PokemonDetail />
                </Route>

                <Route>
                    <div>Erro - Página não encontrada</div>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router