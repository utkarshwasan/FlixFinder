 import React from 'react'

const MovieCard = ({ movie:
  { title, vote_average, poster_path, release_date, original_language }
}) => {
  return (
    <div className="movie-card">
      <img
      // {/* if the poster path exists then return the poster path else return the no movie image */}
        src={poster_path ?
          `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
          
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            {/* if the vote average exists then return the vote average else return N/A */}
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}

             {/* split('-')[0]- splits the date into year only, if the release date exists then split the date and get the year else return N/A */}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
