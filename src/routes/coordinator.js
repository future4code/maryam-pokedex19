export const goToPokemonsList = (history) => {
    history.push("/");
};

export const goToPokedex = (history) => {
    history.push("/pokedex");
};

export const goBack = (history) => {
    history.goBack()
}

export const goToPokemonDetail = (history, name, isPokedex) => {
    console.log("ispoke", isPokedex);
    isPokedex
        ? history.push(`/pokemon/${name}/telaPokedex`)
        : history.push(`/pokemon/${name}`);
};