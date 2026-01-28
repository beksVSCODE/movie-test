import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';
import type { MoviesResponse, MovieDetails } from '../../../shared/types';

export const useMovies = (page: number = 1): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['movies', page],
    queryFn: () => moviesApi.getPopularMovies(page),
    staleTime: 5 * 60 * 1000, // 5 минут
  });
};

export const useMovieDetails = (movieId: number | string): UseQueryResult<MovieDetails, Error> => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => moviesApi.getMovieDetails(movieId),
    enabled: !!movieId,
  });
};

export const useSearchMovies = (query: string, page: number = 1): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['search', query, page],
    queryFn: () => moviesApi.searchMovies(query, page),
    enabled: !!query && query.length > 2,
  });
};
