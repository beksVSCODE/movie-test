import { axiosInstance } from '../../../shared/api/axios.instance';

export const moviesApi = {
    // Получить популярные фильмы с фильтрами
    getPopularMovies: async (page = 1, filters = {}) => {
        const params = {
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

        const { data } = await axiosInstance.get('/discover/movie', {
            params,
        });
        return data;
    },

    // Получить детали фильма
    getMovieDetails: async (movieId) => {
        const { data } = await axiosInstance.get(`/movie/${movieId}`);
        return data;
    },

    // Поиск фильмов с фильтрами
    searchMovies: async (query, page = 1, filters = {}) => {
        const params = {
            query,
            page,
        };

        // Добавляем фильтры если они есть
        if (filters.year) {
            params.year = filters.year;
        }

        const { data } = await axiosInstance.get('/search/movie', {
            params,
        });
        return data;
    },

    // Получить список жанров
    getGenres: async () => {
        const { data } = await axiosInstance.get('/genre/movie/list', {
            params: {
                language: 'ru-RU',
            },
        });
        return data;
    },
};
