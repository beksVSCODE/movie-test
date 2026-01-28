import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovieDetails } from '../../entities/movie';
import { getPosterUrl, getBackdropUrl } from '../../shared/lib/imageHelpers';
import { Loading, ErrorMessage } from '../../shared/ui';
import {
    DetailPageWrapper,
    BackButton,
    BackdropWrapper,
    Backdrop,
    ContentContainer,
    MovieInfo,
    PosterImage,
    DetailsSection,
    Title,
    Tagline,
    MetaInfo,
    MetaItem,
    Rating,
    Overview,
    Section,
    SectionTitle,
    GenreList,
    GenreBadge,
    InfoGrid,
    InfoItem,
    InfoLabel,
    InfoValue,
} from './MovieDetailsPage.styles';

export const MovieDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: movie, isLoading, error } = useMovieDetails(id);

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />;
    if (!movie) return <ErrorMessage message="Фильм не найден" />;

    const formatDate = (dateString) => {
        if (!dateString) return 'Неизвестно';
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatRuntime = (minutes) => {
        if (!minutes) return 'Неизвестно';
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}ч ${mins}мин`;
    };

    const formatMoney = (amount) => {
        if (!amount) return 'Неизвестно';
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <DetailPageWrapper>
            <BackButton onClick={() => navigate(-1)}>
                ← Назад к списку
            </BackButton>

            {movie.backdrop_path && (
                <BackdropWrapper>
                    <Backdrop
                        src={getBackdropUrl(movie.backdrop_path, 'large')}
                        alt={movie.title}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </BackdropWrapper>
            )}

            <ContentContainer>
                <MovieInfo>
                    <PosterImage
                        src={getPosterUrl(movie.poster_path, 'large')}
                        alt={movie.title}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                        }}
                    />

                    <DetailsSection>
                        <div>
                            <Title>{movie.title}</Title>
                            {movie.tagline && <Tagline>"{movie.tagline}"</Tagline>}
                        </div>

                        <MetaInfo>
                            <Rating>
                                ⭐ {movie.vote_average?.toFixed(1)}
                                <span style={{ fontSize: '14px', color: '#b3b3b3' }}>
                                    ({movie.vote_count} голосов)
                                </span>
                            </Rating>
                            <MetaItem>📅 {formatDate(movie.release_date)}</MetaItem>
                            <MetaItem>⏱️ {formatRuntime(movie.runtime)}</MetaItem>
                        </MetaInfo>

                        {movie.genres && movie.genres.length > 0 && (
                            <Section>
                                <SectionTitle>Жанры</SectionTitle>
                                <GenreList>
                                    {movie.genres.map((genre) => (
                                        <GenreBadge key={genre.id}>{genre.name}</GenreBadge>
                                    ))}
                                </GenreList>
                            </Section>
                        )}

                        {movie.overview && (
                            <Section>
                                <SectionTitle>Описание</SectionTitle>
                                <Overview>{movie.overview}</Overview>
                            </Section>
                        )}

                        <Section>
                            <SectionTitle>Информация</SectionTitle>
                            <InfoGrid>
                                {movie.budget > 0 && (
                                    <InfoItem>
                                        <InfoLabel>Бюджет</InfoLabel>
                                        <InfoValue>{formatMoney(movie.budget)}</InfoValue>
                                    </InfoItem>
                                )}
                                {movie.revenue > 0 && (
                                    <InfoItem>
                                        <InfoLabel>Сборы</InfoLabel>
                                        <InfoValue>{formatMoney(movie.revenue)}</InfoValue>
                                    </InfoItem>
                                )}
                                {movie.status && (
                                    <InfoItem>
                                        <InfoLabel>Статус</InfoLabel>
                                        <InfoValue>{movie.status}</InfoValue>
                                    </InfoItem>
                                )}
                                {movie.original_language && (
                                    <InfoItem>
                                        <InfoLabel>Язык оригинала</InfoLabel>
                                        <InfoValue>{movie.original_language.toUpperCase()}</InfoValue>
                                    </InfoItem>
                                )}
                            </InfoGrid>
                        </Section>

                        {movie.production_companies && movie.production_companies.length > 0 && (
                            <Section>
                                <SectionTitle>Производство</SectionTitle>
                                <GenreList>
                                    {movie.production_companies.map((company) => (
                                        <GenreBadge key={company.id}>{company.name}</GenreBadge>
                                    ))}
                                </GenreList>
                            </Section>
                        )}
                    </DetailsSection>
                </MovieInfo>
            </ContentContainer>
        </DetailPageWrapper>
    );
};
