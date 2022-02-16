import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/api';

const Reviews = () => {
  const [authors, setAuthor] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    api.fetchMovieReviews(moviesId).then(setAuthor);
  }, [moviesId]);
  console.log(authors);

  return (
    <>
      {authors && (
        <ul>
          {authors.results.map(author => (
            <li key={author.id}>
              <h3>Author:{author.author}</h3>
              <p>{author.content}</p>
            </li>
          ))}
        </ul>
      )}
      {authors?.results?.length === 0 && (
        <p>"We don't have any reviews for this movie."</p>
      )}
    </>
  );
};

export default Reviews;
