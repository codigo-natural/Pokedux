import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions";
import StarButton from "../StartButton";
import './styles.css';

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((elem) => elem.type.name).join(', ')

  const hanleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return (
    <Card
      title={name}
      cover={
        <img src={image}
          alt={image}
        />
      }
      extra={
        <StarButton
          isFavorite={favorite}
          onClick={hanleOnFavorite}
        />}
    >
      <Meta description={typeString} />
    </Card>
  )
}

export default PokemonCard;