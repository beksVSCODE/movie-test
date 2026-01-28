import React from 'react';
import { getPosterUrl } from '../../shared/lib/imageHelpers';
import {
    MovieCardWrapper,
    PosterWrapper,
    Poster,
    Rating,
    ContentWrapper,
    Title,
    ReleaseDate,
    Overview,
} from './MovieCard.styles';

export const MovieCard = ({ movie, onClick }) => {
    const formatDate = (dateString) => {
        if (!dateString) return 'Дата не указана';
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <MovieCardWrapper onClick={() => onClick?.(movie.id)}>
            <PosterWrapper>
                <Poster
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/342x513?text=No+Image';
                    }}
                />
                {movie.vote_average > 0 && (
                    <Rating>
                        ⭐ {movie.vote_average.toFixed(1)}
                    </Rating>
                )}
            </PosterWrapper>
            <ContentWrapper>
                <Title>{movie.title}</Title>
                <ReleaseDate>
                    📅 {formatDate(movie.release_date)}
                </ReleaseDate>
                {movie.overview && (
                    <Overview>
                        {movie.overview || 'Описание отсутствует'}
                    </Overview>
                )}
            </ContentWrapper>
        </MovieCardWrapper>
    );
};
