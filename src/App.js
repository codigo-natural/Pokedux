import { Col, Skeleton } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import pokemonLogo from './statics/pokemonLogo.png';

function App() {

  const pokemons = useSelector((state) =>
    state.data.pokemons, shallowEqual
  );
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
