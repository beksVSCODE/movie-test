import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovies, useSearchMovies, useSearchStore } from '../../entities/movie';
import { SearchBar } from '../../features/search-movies';
import { MoviesGrid } from '../../widgets/movies-grid';
import { Loading, ErrorMessage, Pagination } from '../../shared/ui';
import { useDebounce } from '../../shared/lib';
import {
    PageWrapper,
    PageContainer,
    PageTitle,
    MoviesCount,
} from './MoviesListPage.styles';

export const MoviesListPage = () => {
    const navigate = useNavigate();
    const { searchQuery, currentPage, setCurrentPage } = useSearchStore();
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // Используем поиск если есть запрос (минимум 3 символа), иначе популярные фильмы
    const isSearchMode = debouncedSearchQuery.length >= 3;

    const popularMovies = useMovies(currentPage);
    const searchResults = useSearchMovies(debouncedSearchQuery, currentPage);

    // Выбираем активный запрос
    const { data, isLoading, error } = isSearchMode ? searchResults : popularMovies;

    // Скролл вверх при смене страницы
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />;

    const totalPages = Math.min(data?.total_pages || 1, 500); // API ограничивает до 500 страниц

    return (
        <PageWrapper>
            <PageContainer>
                <PageTitle>🎬 {isSearchMode ? 'Результаты поиска' : 'Популярные фильмы'}</PageTitle>
                <SearchBar />
                {data?.total_results && (
                    <MoviesCount>
                        Найдено фильмов: {data.total_results.toLocaleString('ru-RU')}
                    </MoviesCount>
                )}
                <MoviesGrid
                    movies={data?.results}
                    onMovieClick={handleMovieClick}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </PageContainer>
        </PageWrapper>
    );
};
