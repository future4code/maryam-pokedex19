import { Head } from './styled';
import { useHistory } from 'react-router-dom';
import { goBack, goToPokedex } from '../../routes/coordinator';
import { useContext } from 'react';
import { GlobalContext } from '../../global/contexts/GlobalContext';

const Header = (props) => {
  const history = useHistory();

  const { addToPokedex, removeFromPokedex, pokedex } =
    useContext(GlobalContext);

  if (props.detalhes) {

    return (
      <Head>
        <button onClick={() => goBack(history)}>Voltar</button>
        <p>{props.pokeName}</p>
        {pokedex.some((el) => el.name === props.pokeName) ? (
          <button
            style={{ width: 'auto' }}
            onClick={() => { goToPokedex(history) } }
          >
            Remover da Pokedex
          </button>
        ) : (
          <button
            style={{ width: 'auto' }}
            onClick={() => { goToPokedex(history)}}
          >
            Adicionar na Pokedex
          </button>
        )}
      </Head>
    );

  }

  if (props.pokedex) {
    return (
      <Head>
        <button onClick={() => goBack(history)}>Voltar</button>
        <p>Pokedex</p>
        <div></div>
      </Head>
    );
  }

  return (
    <Head>
      <button onClick={() => goBack(history)}>Voltar</button>
      <p>infoPokes.com</p>
      <button onClick={() => goToPokedex(history)}>Pokedex</button>
    </Head>
  );
};

export default Header;
