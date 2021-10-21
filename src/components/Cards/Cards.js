import { Card, GridCard, ContainerButtons } from "./styled"

export const Cards = () => {
    return (
        <div>

            <Header />
            <GridCard>

                {isLoadingPokes && <h2>Carregando</h2>}
                {!isLoadingPokes && errorRequest && <p>{errorRequest.message} </p>}
                {!isLoadingPokes && pokes && pokes.length === 0 && (<p> Não foi encontrado nenhum resultado </p>)}

                {detailPokes && detailPokes.map((item) => <Card key={item.id}>
                    <img src={item.sprites.versions['generation-v']['black-white'].animated.front_default} />
                    <h2>{(item.name).capitalize()} </h2>
                    <ContainerButtons>
                        <button onClick={() => addToPokedex(item.id)}>Adicionar à Pokedex</button>
                        <button onClick={() => goToDetailPage(item.id)}>Ver detalhes</button>
                    </ContainerButtons>
                </Card>
                )}
            </GridCard>
        </div>
    )
}