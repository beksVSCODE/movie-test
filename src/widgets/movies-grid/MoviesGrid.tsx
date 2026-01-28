import React from 'react';
import type { Movie } from '../../shared/types';
import { MovieCard } from '../movie-card';
import { GridWrapper, EmptyState } from './MoviesGrid.styles';

interface MoviesGridProps {
  movies?: Movie[];
  onMovieClick?: (movieId: number) => void;
}

export const MoviesGrid: React.FC<MoviesGridProps> = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return (
      <GridWrapper>
        <EmptyState>Фильмы не найдены</EmptyState>
      </GridWrapper>
    );
  }

  return (
    <GridWrapper>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </GridWrapper>
  );
};
