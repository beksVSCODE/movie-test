import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';
import type { MoviesResponse, MovieDetails, MovieFilters, GenresResponse } from '../../../shared/types';

export const useMovies = (page: number = 1, filters: MovieFilters = {}): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['movies', page, filters],
    queryFn: () => moviesApi.getPopularMovies(page, filters),
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

export const useSearchMovies = (query: string, page: number = 1, filters: MovieFilters = {}): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['search', query, page, filters],
    queryFn: () => moviesApi.searchMovies(query, page, filters),
    enabled: !!query && query.length > 2,
  });
};

export const useGenres = (): UseQueryResult<GenresResponse, Error> => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => moviesApi.getGenres(),
    staleTime: 24 * 60 * 60 * 1000, // 24 часа - жанры редко меняются
  });
};
