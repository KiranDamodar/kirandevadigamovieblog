import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";

import MovieCard from "../components/MovieCard";
function Favorites()
{
const {favorites} = useMovieContext()

if(favorites && favorites.length > 0){
return(
  <div className="movies-grid">
    {favorites.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
    </div>
);
}
else{
  return(
  <div className="favorites-empty">
  <h2>No Favorite Movies yet</h2>
    <p>start adding your favorite movies here and they will appear here</p>  
</div>);
}
}
export default Favorites;