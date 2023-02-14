import { Col, Skeleton } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './actions';
import { getPokemon } from './api';
import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import pokemonLogo from './statics/pokemonLogo.png';

function App() {

  const pokemons = useSelector((state) => state.getIn(['data', 'pokemons'])).toJS();
  const loading = useSelector((state) => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={pokemonLogo} alt="logo-pokemon" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col span={12} offset={2} >
          <Skeleton loading size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
