export const goToPokemonsList = (history) => {
    history.push("/");
};

export const goToPokedex = (history) => {
    history.push("/pokedex");
};

export const goBack = (history) => {
    history.goBack()
}
