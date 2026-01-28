import { axiosInstance } from '../../../shared/api/axios.instance';
import type { MoviesResponse, MovieDetails } from '../../../shared/types';

export const moviesApi = {
    // Получить популярные фильмы
    getPopularMovies: async (page: number = 1): Promise<MoviesResponse> => {
        const { data } = await axiosInstance.get<MoviesResponse>('/discover/movie', {
            params: {
                sort_by: 'popularity.desc',
                page,
            },
        });
        return data;
    },

    // Получить детали фильма
    getMovieDetails: async (movieId: number | string): Promise<MovieDetails> => {
        const { data } = await axiosInstance.get<MovieDetails>(`/movie/${movieId}`);
        return data;
    },

    // Поиск фильмов
    searchMovies: async (query: string, page: number = 1): Promise<MoviesResponse> => {
        const { data } = await axiosInstance.get<MoviesResponse>('/search/movie', {
            params: {
                query,
                page,
            },
        });
        return data;
    },
};
