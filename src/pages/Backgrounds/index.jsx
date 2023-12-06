import BackgroundList from '../../components/BackgroundList';
import './Backgrounds.css';

const backgrounds = [
  '/backgrounds/bu-mario.jpeg',
  '/backgrounds/computer.jpeg',
  '/backgrounds/flame.jpeg',
  '/backgrounds/happy-face.jpeg',
];

export default function Backgrounds({ favBackgrounds, onFavorite }) {
  return (
    <div className="container-backgrounds">
      <div className="fav-container">
        <h2>Favoritos</h2>
        {
          favBackgrounds.length > 0 ? (
            <BackgroundList
              backgrounds={ favBackgrounds.map(favBg => ({...favBg, isFavorite: true})) }
              onFavorite={onFavorite}
            />
          ) : (
            <h4>Nenhuma imagem favorita ainda</h4>
          )
        }
      </div>
      <div className="all-container">
        <h2>Todos</h2>
        <BackgroundList
          backgrounds={ backgrounds.map(background => ({
            id: favBackgrounds?.find((favBg) => favBg.background == background)?.id ?? null,
            background,
            isFavorite: favBackgrounds?.find((favBg) => favBg.background == background) != undefined
          })) }
          onFavorite={onFavorite}
        />
      </div>
    </div>
  )
}
