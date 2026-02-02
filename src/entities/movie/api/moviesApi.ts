import { axiosInstance } from '../../../shared/api/axios.instance';
import type { MoviesResponse, MovieDetails, MovieFilters, GenresResponse } from '../../../shared/types';

export const moviesApi = {
    // Получить популярные фильмы с фильтрами
    getPopularMovies: async (page: number = 1, filters: MovieFilters = {}): Promise<MoviesResponse> => {
        const params: Record<string, any> = {
            sort_by: 'popularity.desc',
            page,
        };

        // Добавляем фильтры если они есть
        if (filters.genreId) {
            params.with_genres = filters.genreId;
        }
        if (filters.year) {
            params.primary_release_year = filters.year;
        }
        if (filters.minRating) {
            params['vote_average.gte'] = filters.minRating;
        }

        const { data } = await axiosInstance.get<MoviesResponse>('/discover/movie', {
            params,
        });
        return data;
    },

    // Получить детали фильма
    getMovieDetails: async (movieId: number | string): Promise<MovieDetails> => {
        const { data } = await axiosInstance.get<MovieDetails>(`/movie/${movieId}`);
        return data;
    },

    // Поиск фильмов с фильтрами
    searchMovies: async (query: string, page: number = 1, filters: MovieFilters = {}): Promise<MoviesResponse> => {
        const params: Record<string, any> = {
            query,
            page,
        };

        // Добавляем фильтры если они есть
        if (filters.year) {
            params.year = filters.year;
        }

        const { data } = await axiosInstance.get<MoviesResponse>('/search/movie', {
            params,
        });
        return data;
    },

    // Получить список жанров
    getGenres: async (): Promise<GenresResponse> => {
        const { data } = await axiosInstance.get<GenresResponse>('/genre/movie/list', {
            params: {
                language: 'ru-RU',
            },
        });
        return data;
    },
};
