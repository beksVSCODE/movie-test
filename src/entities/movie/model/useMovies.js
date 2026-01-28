import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';

export const useMovies = (page = 1) => {
    return useQuery({
        queryKey: ['movies', page],
        queryFn: () => moviesApi.getPopularMovies(page),
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

export const useSearchMovies = (query, page = 1) => {
    return useQuery({
        queryKey: ['search', query, page],
        queryFn: () => moviesApi.searchMovies(query, page),
        enabled: !!query && query.length > 2,
    });
};
