import BackgroundList from '../../components/BackgroundList';
import './Backgrounds.css';

const backgrounds = [
  'https://cdn.awsli.com.br/600x700/175/175683/produto/5294021/8befb43fe5.jpg',
  'https://static3.tcdn.com.br/img/img_prod/460977/em_breve_the_legend_of_zelda_link_between_worlds_figma_good_smile_company_19343_5_20201211172813.jpg',
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
