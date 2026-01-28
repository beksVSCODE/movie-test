import React from 'react';
import { MovieCard } from '../movie-card';
import { GridWrapper, EmptyState } from './MoviesGrid.styles';

export const MoviesGrid = ({ movies, onMovieClick }) => {
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
