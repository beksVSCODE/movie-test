import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';

export const useMovies = (page = 1, filters = {}) => {
    return useQuery({
        queryKey: ['movies', page, filters],
        queryFn: () => moviesApi.getPopularMovies(page, filters),
        staleTime: 5 * 60 * 1000, // 5 минут
    });
};

export const useMovieDetails = (movieId) => {
    return useQuery({
        queryKey: ['movie', movieId],
        queryFn: () => moviesApi.getMovieDetails(movieId),
        enabled: !!movieId,
    });
};

export const useSearchMovies = (query, page = 1, filters = {}) => {
    return useQuery({
        queryKey: ['search', query, page, filters],
        queryFn: () => moviesApi.searchMovies(query, page, filters),
        enabled: !!query && query.length > 2,
    });
};

export const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => moviesApi.getGenres(),
        staleTime: 24 * 60 * 60 * 1000, // 24 часа - жанры редко меняются
    });
};
