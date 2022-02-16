import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/api';
import img from '../../img/img.png';
const Cast = () => {
  const [actors, setActors] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    api.fetchMovieCredits(moviesId).then(setActors);
  }, [moviesId]);
  console.log(actors);

  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  return (
    <>
      {actors && (
        <ul>
          {actors.cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img src={imgUrl + actor.profile_path} width="200" alt=""></img>
              ) : (
                <img src={img} width="200" alt=""></img>
              )}
              <h3>{actor.name}</h3>
              {actor.character && <p>Character : {actor.character}</p>}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
